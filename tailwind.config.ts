import preline from "preline";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          background: "var(--color-header-background)",
        },
        status: {
          great: "var(--color-status-great)",
          opportunity: "var(--color-status-opportunity)",
          "big-opportunity": "var(--color-status-big-opportunity)",
          "focus-on": "var(--color-status-focus-on)",
          none: "var(--color-status-none)",
        },
        solid: {
          dark: "var(--color-solid-dark)",
          gray: "var(--color-solid-gray)",
          green: "var(--color-solid-green)",
          blue: "var(--color-solid-blue)",
          red: "var(--color-solid-red)",
          yellow: "var(--color-solid-yellow)",
        },
        soft: {
          dark: {
            bg: "var(--color-soft-dark-bg)",
            text: "var(--color-soft-dark-text)",
            "muted-text": "var(--color-soft-dark-muted-text)",
            border: "var(--color-soft-dark-border)",
          },
          gray: {
            bg: "var(--color-soft-gray-bg)",
            text: "var(--color-soft-gray-text)",
            "muted-text": "var(--color-soft-gray-muted-text)",
            border: "var(--color-soft-gray-border)",
          },
          green: {
            bg: "var(--color-soft-green-bg)",
            text: "var(--color-soft-green-text)",
            "muted-text": "var(--color-soft-green-muted-text)",
            border: "var(--color-soft-green-border)",
          },
          blue: {
            bg: "var(--color-soft-blue-bg)",
            text: "var(--color-soft-blue-text)",
            "muted-text": "var(--color-soft-blue-muted-text)",
            border: "var(--color-soft-blue-border)",
          },
          red: {
            bg: "var(--color-soft-red-bg)",
            text: "var(--color-soft-red-text)",
            "muted-text": "var(--color-soft-red-muted-text)",
            border: "var(--color-soft-red-border)",
          },
          yellow: {
            bg: "var(--color-soft-yellow-bg)",
            text: "var(--color-soft-yellow-text)",
            "muted-text": "var(--color-soft-yellow-muted-text)",
            border: "var(--color-soft-yellow-border)",
          },
        },
      },
    },
  },
  plugins: [preline],
};
