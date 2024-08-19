# Task Description

**Launch URL:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

## Test Scenarios

### UC-1: Test Login form with empty credentials

1. Type any credentials into "Username" and "Password" fields.
2. Clear the inputs.
3. Hit the "Login" button.
4. Check the error messages: "Username is required".

### UC-2: Test Login form with credentials by passing Username

1. Type any credentials in the "Username" field.
2. Enter a password.
3. Clear the "Password" input.
4. Hit the "Login" button.
5. Check the error messages: "Password is required".

### UC-3: Test Login form with credentials by passing Username & Password

1. Type credentials in the "Username" field which are listed under the "Accepted usernames" section.
2. Enter password as "secret_sauce".
3. Click on "Login" and validate that the title “Swag Labs” is displayed on the dashboard.

## Additional Requirements

- Provide parallel execution.
- Add logging for tests.
- Use a Data Provider to parametrize tests.
- Ensure that all tasks are supported by these 3 conditions: UC-1, UC-2, UC-3.

## Tools & Technologies

- **Test Automation Tool:** WebDriverIO
- **Browsers:**
    1. Edge
    2. Firefox
- **Locators:** XPath
- **Design Pattern:** Page Object
- **Assertions:** Use from the selected framework
- **[Optional] Loggers:** Use from the selected framework

---


