const CONFIG = {
    headless: false,
    api: {
        host: "127.0.0.1",
        port: 3000
    },
    ui: {
        ssl: false,
        host: "127.0.0.1",
        port: 3000,
        path: "/"
    },
    adapter: "sqlite"
}
if (typeof window === "undefined")
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;

