import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "5efezj",
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,ts}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    env: {
      // Placeholders for env vars
      USER_EMAIL: '',
      USER_PASSWORD: ''
    }
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  }
});
