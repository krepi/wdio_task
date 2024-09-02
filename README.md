
# Automated Testing Project - WebDriverIO
# version 0.01.01
## Table of Contents

1. [Introduction](#introduction)
2. [Task Description](#task-description)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [Running the Tests](#running-the-tests)
6. [Test Suites](#test-suites)
7. [Allure Reporting](#allure-reporting)
8. [Troubleshooting](#troubleshooting)
9. [Additional Information](#additional-information)

---

## Introduction

This project is designed to demonstrate automated end-to-end testing using WebDriverIO. It includes three primary test cases (UC-1, UC-2, UC-3) focusing on form validation and successful login on the [SauceDemo](https://www.saucedemo.com) website.

## Task Description

**Launch URL:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

### Test Scenarios

#### UC-1: Test Login form with empty credentials

1. Type any credentials into "Username" and "Password" fields.
2. Clear the inputs.
3. Hit the "Login" button.
4. Check the error messages: "Username is required".

#### UC-2: Test Login form with credentials by passing Username

1. Type any credentials in the "Username" field.
2. Enter a password.
3. Clear the "Password" input.
4. Hit the "Login" button.
5. Check the error messages: "Password is required".

#### UC-3: Test Login form with credentials by passing Username & Password

1. Type credentials in the "Username" field which are listed under the "Accepted usernames" section.
2. Enter password as "secret_sauce".
3. Click on "Login" and validate that the title “Swag Labs” is displayed on the dashboard.

### Additional Requirements

- Provide parallel execution.
- Add logging for tests.
- Use a Data Provider to parametrize tests.
- Ensure that all tasks are supported by these 3 conditions: UC-1, UC-2, UC-3.

### Tools & Technologies

- **Test Automation Tool:** WebDriverIO
- **Browsers:**
  1. Edge
  2. Firefox
- **Locators:** XPath
- **Design Pattern:** Page Object
- **Assertions:** Use from the selected framework
- **[Optional] Loggers:** Use from the selected framework

### Technologies Used

- **WebDriverIO**: Test Automation Framework
- **Mocha**: Test Framework
- **Allure**: Reporting Tool
- **JavaScript (ES6+)**: Scripting Language
- **XPath**: Locators for Element Identification
- **Page Object Model (POM)**: Design Pattern

## Project Structure

```
setup_wdio_9/
│
├── config/
│   ├── osType.js
│
├── test/
│   ├── specs/
│   │   ├── e2e/
│   │   │   ├── UC-1.spec.js
│   │   │   ├── UC-2.spec.js
│   │   │   ├── UC-3.spec.js
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │
│   ├── components/
│   │   ├── LoginForm.js
│   │   ├── Header.js
│   │
│   ├── utils/
│   │   ├── dataProvider.js
│
├── .gitignore
├── package.json
├── wdio.conf.js
└── README.md
```


## Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://gitlab.com/krepskiprzemyslaw/final_task
   cd final_task
   ```

2. **Install Dependencies:**

   Run the following command to install all the necessary dependencies:

   ```bash
   npm install
   ```

3. **Java Installation (For Allure Reports):**

   If you plan to generate and view Allure reports, make sure you have Java installed. You can download it from [java.com](https://www.java.com/).

   Verify your installation:

   ```bash
   java -version
   ```

## Running the Tests

To run the tests, ensure you have all dependencies installed by running:

```bash
npm install
```

### Running All Tests

You can run all tests with the default command:

```bash
npm run wdio
```

### Running Individual Test Suites

The project includes separate suites for each use case (UC-1, UC-2, UC-3). You can run individual test suites using:

```bash
npm run UC1
npm run UC2
npm run UC3
```

### Running Tests in Headless Mode

Tests can be executed in headless mode by default. If you prefer running them without headless mode, modify the capabilities in `wdio.conf.js`:

- For Firefox:
  ```js
  {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: [] // Remove the "-headless" argument
    }
  }
  ```

- For Edge:
  ```js
  {
    browserName: 'MicrosoftEdge',
    'ms:edgeOptions': {
      args: [] // Remove the "-headless" argument
    }
  }
  ```

Alternatively, you can manually specify headless mode when running the tests:

```bash
npm run wdio -- --capabilities.browserName=firefox --capabilities["moz:firefoxOptions"].args=["-headless"]
```

### Generating Allure Reports

If you have Java installed, you can generate and serve the Allure report using:

```bash
npm run allure:serve
```

This command will open the Allure report in your default browser.

### Additional Options

- **Parallel Execution:** The tests are configured to run in parallel with multiple instances to speed up the execution.
- **Logging:** Test results are logged with the Spec and Allure reporters. You can review test outputs directly in the terminal or view detailed reports with Allure.

## Test Suites

The following test suites are available:

1. **UC-1: Test Login form with empty credentials**
2. **UC-2: Test Login form with credentials by passing Username**
3. **UC-3: Test Login form with credentials by passing Username & Password**

Each suite is defined in the `wdio.conf.js` file and can be executed individually as described above.

## Allure Reporting

The project integrates Allure reporting to provide detailed insights into the test execution. The reports include:

- Test status (passed, failed, skipped)
- Screenshots on test failure
- Test steps and logs

To view the report:

1. Ensure you have Java installed.
2. Run the following command:

```bash
npm run allure:serve
```

The report will automatically open in your default browser.

## Troubleshooting

- **Allure Report Not Displaying:** Ensure Java is installed and properly configured.
- **Browser Not Launching:** Verify that the correct drivers are installed and that the browser versions match the WebDriver versions.
- **Headless Mode Issues:** Make sure the capabilities in the `wdio.conf.js` file are correctly set for headless or non-headless execution.

## Additional Information

This project is designed following best practices, using the Page Object Model (POM) to separate concerns and keep the tests maintainable. It also integrates parallel execution, data-driven testing, and comprehensive reporting.

---
