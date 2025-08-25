## Install dependencies only when needed
FROM node:22.18.0-alpine3.21 AS deps
## Creating a new folder in the dockerimage
WORKDIR /app

## Lower the memory footprint
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json tsconfig.json ./

RUN npm ci



##--------
## Rebuild the source code only when needed
FROM node:22.18.0-alpine3.21 AS builder
WORKDIR /app

## Disable Next telemetry
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules

## Bring everything in the dockerimage
COPY . .

ENV NEXT_PUBLIC_VAPID_PUBLIC_KEY=BLNz-_uuovEJboEtl7IqwRldW6_O7BIHHduZywRm6HWQBUUufhFzQPB5yviIIkOhgZMJ8QhhknH03LST4EYr22w
ENV VAPID_PRIVATE_KEY=FPLBsR28-4KDXbdtVy-bpoJvxByrqM_IjqtunFCiiG4

## Building the fe image
RUN npm run build



##-----------
## Production image, copy all the files and run next
FROM node:22.18.0-alpine3.21 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_PUBLIC_VAPID_PUBLIC_KEY=BLNz-_uuovEJboEtl7IqwRldW6_O7BIHHduZywRm6HWQBUUufhFzQPB5yviIIkOhgZMJ8QhhknH03LST4EYr22w
ENV VAPID_PRIVATE_KEY=FPLBsR28-4KDXbdtVy-bpoJvxByrqM_IjqtunFCiiG4

## Giving the proper
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/jest.config.js ./
COPY --from=builder /app/tailwind.config.ts ./
COPY --from=builder /app/postcss.config.mjs ./
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


## Change from root
#USER nextjs

EXPOSE 3000

## Do not comment this
## This is required since nextjs 13.4.3
## It seems that nextjs defaults to 127.0.0.1 and redeems the container unreachable
## In case you know the precise IP (static one) you can change this
ENV HOSTNAME=0.0.0.0

ENV PORT=3000
# ENV HOSTNAME localhost


## Setup the healthcheck in dockerfile
#--start-interval=5s can be added if docker >=25 is used
HEALTHCHECK --start-period=45s --retries=3 --interval=10s --timeout=5s \ 
    CMD echo healthy

CMD ["node", "server.js"]

##___
# >>> NOTE: With this type of build the envs, args and files care not persisted between the runs -> dependecies, build and runner
# Extra care for this as you might require to make sure to retain the values at each stage