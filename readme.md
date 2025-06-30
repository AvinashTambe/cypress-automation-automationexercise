# Cypress Automation for Automation Exercise

This project contains automated tests for [Automation Exercise](https://www.automationexercise.com/) using Cypress.

## Project Overview

- **Website Under Test:** [https://www.automationexercise.com/](https://www.automationexercise.com/)
- **Testing Framework:** [Cypress](https://www.cypress.io/)
- **Purpose:** End-to-end UI automation for various scenarios on the Automation Exercise website.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd cypress-automation-automationexercise
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Install Cypress (if not already installed):**
   ```bash
   npm install cypress --save-dev
   ```

## Running Tests

### 1. Open Cypress Test Runner (GUI)
```bash
npx cypress open
```
- This will launch the Cypress Test Runner where you can select and run tests interactively.

### 2. Run Tests in Headless Mode (CLI)
```bash
npx cypress run
```
- This will execute all tests in the terminal without opening the GUI.

### 3. Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/<your-test-file>.cy.js"
```
- Replace `<your-test-file>.cy.js` with the name of your test file.

### 4. Run Tests in a Specific Browser
```bash
npx cypress run --browser chrome
```
- Supported browsers: `chrome`, `firefox`, `edge`, etc.

## Folder Structure
- `cypress/` - Contains all test files and Cypress configuration.
- `cypress/e2e/` - Place your test scripts here.
- `cypress/support/` - Custom commands and support files.
- `cypress/fixtures/` - Test data files.

## Additional Resources
- [Cypress Documentation](https://docs.cypress.io/)
- [Automation Exercise Website](https://www.automationexercise.com/)

---
Feel free to contribute or raise issues for improvements!
