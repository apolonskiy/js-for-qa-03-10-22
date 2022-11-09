const {defineConfig} = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  retries: {
    runMode: 1,
    openMode: 0
  },
  video: true,
  e2e: {
    baseUrl: "https://devexpress.github.io/testcafe/example",
    specPattern: "cypress/e2e/*.spec.js"
  }
});
