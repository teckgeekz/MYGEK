const CONFIG = {
    headless: false,
    api: {
        host: "127.0.0.1",
        port: 3000
    },
    ui: {
        ssl: true,
        host: "143.244.137.238",
        port: 443,
        path: "/"
    },
    adapter: "sqlite"
}
if (typeof window === "undefined")
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;

