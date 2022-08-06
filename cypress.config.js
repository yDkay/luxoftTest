const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    supportFile: "/home/caio/qaLearn/luxoft/cyProj/cypress/support/commands.ts",
  },
});

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1000,
    viewportWidth: 1600,
    screenshotOnRunFailure: true,
    retries: 0,
    numTestsKeptInMemory: 15,
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    videoCompression: 0,
  },
});
