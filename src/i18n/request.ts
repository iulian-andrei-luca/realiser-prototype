import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "en";
  const baseMessages = {
    ...(await import(`../messages/${locale}.json`)).default,
  };

  return {
    locale,
    messages: baseMessages,
  };
});
