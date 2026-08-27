const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  projectId: 'eooyug',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto Cucumber',
      reportPageTitle: 'Projeto Cucumber',
    },
    baseUrl: "https://automationpratice.com.br/",
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
