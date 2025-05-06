# Magento Cypress Automation Framework

## Node.js Version

**Recommended Node.js version: 20.x (LTS).**
For best compatibility with Cypress and all reporting tools, use Node.js 20 (LTS).
Node.js 22+ is not officially recommended for Cypress as of v14.x.
To install and use Node.js 20 with [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 20
nvm use 20
```

Check your version:

```bash
node -v
```

## ⚠️ Known Issues & Compatibility

- **mochawesome-merge:** Project uses v4.x for Node.js 20 compatibility.
  Do not upgrade to v5.x unless you switch to Node.js 22+.
- **xlsx vulnerability:** The `xlsx` package currently has a high-severity security advisory with no fix available.
  Only use it with trusted data, or remove it from dependencies if Excel support is not required.
  See advisories: [GHSA-4r6h-8v6p-xvw6](https://github.com/advisories/GHSA-4r6h-8v6p-xvw6), [GHSA-5pgg-2g8v-p4x9](https://github.com/advisories/GHSA-5pgg-2g8v-p4x9).

## Overview

This framework provides UI and API test automation for the Magento demo site using Cypress and TypeScript.
It follows the Page Object Model, supports external data sources, and integrates reporting and CI.

## Features

- UI Automation with Cypress (POM)
- API Testing
- External data support (JSON, CSV, Excel)
- Mochawesome reporting
- GitHub Actions CI
- Secure: No secrets in codebase (use env vars)

## Setup

1. **Clone the repo**
2. **Install dependencies:**
   ```
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in required values.

## Running Tests

- All tests (default: Electron, headless):
  ```
  npm test
  ```
- UI tests only:
  ```
  npm run test:ui
  ```
- Run tests in headed mode (with a browser window):
  ```
  npm run test:headed
  ```
- Run tests in a specific browser:
  - **Chrome**:
    ```
    npm run test:chrome
    ```
  - **Firefox**:
    ```
    npm run test:firefox
    ```

You can also combine `--headed` and `--browser <name>` for custom runs, e.g.:

```bash
npx cypress run --browser chrome --headed
```

## Debugging

```bash
  npx cypress open
```

## Reports

After running tests, open the HTML report in `cypress/reports/html`.

## Data Files

- Place test data in `cypress/fixtures/` as `.json`, `.csv`, or `.xlsx`.

## GitHub Actions

CI runs all tests and uploads Mochawesome reports as artifacts.
+ possibility to run tests in parallel.

.yml file contains CYPRESS_RECORD_KEY private key. 
Register https://cloud.cypress.io/ here for taking this for your project.

- **Pages** are imported using path aliases (e.g. `@pages/RegisterPage`) for clean and maintainable code.
  See `tsconfig.json` for alias setup.
- **Test Reports** are stored in `cypress/reports/` (auto-created).

## Code Style & Linting

This project uses **Prettier** for code formatting and **ESLint** for linting TypeScript and JavaScript files.

- **Format all code:**
  ```
  npm run format
  ```
- **Lint all code:**
  ```
  npm run lint
  ```

You can configure Prettier and ESLint by adding `.prettierrc` and `.eslintrc` files to the root of the project.

---

**Do not store real credentials or API keys in the repo. Use environment variables!**

## Main Features of This Cypress Test Framework

- **Page Object Model**: All UI pages and forms are represented as classes, encapsulating selectors and reusable methods for maintainable, scalable tests.
- **Fixtures & Data-Driven Testing**: Supports reading test data from JSON, CSV, and Excel files, enabling flexible and robust data-driven tests.
- **Base Page & Base Elements**: Core abstractions (`BasePage`, `BaseElement`) provide shared methods (e.g., waiting for visibility, interacting with elements) to avoid code duplication.
- **Element Abstractions**: UI elements are split into dedicated classes (e.g., `Button`, `Input`, `DropDown`) for reusable, maintainable selectors and actions.
- **CSS & XPath Selectors**: Framework supports both CSS and XPath selectors for flexible and precise element targeting.
- **Clean Code Principles**: Forms and step definitions are modular and DRY (Don't Repeat Yourself), ensuring maintainable and readable code.
- **Parallel & Cross-Browser Testing**: GitHub Actions CI is configured to run tests in parallel across different browsers (e.g., Chrome, Firefox).
- **Automated Linting**: GitHub Actions also runs ESLint to enforce code quality and consistency.
- **Easy Test Data Management**: Built-in support for loading and using test data from various sources for comprehensive test coverage.
- **Reporting & Screenshots**: Generates detailed test reports with automatic screenshots on failure. Test run artifact (Report with screenshots) is available locally and on CI.
- **CI Video Uploads**: On CI, recorded videos are uploaded to [cloud.cypress.io](https://cloud.cypress.io) for easy viewing and sharing.
