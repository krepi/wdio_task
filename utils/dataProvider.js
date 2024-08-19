const DataProvider = {
    urls: {
        loginPage: 'https://www.saucedemo.com/',
        inventoryPage: 'https://www.saucedemo.com/inventory.html',
    },
    loginData: {
        'UC-1': {
            username: 'asdasd',
            password: 'dsewwdsd',
            expectedError: 'Epic sadface: Username is required'
        },
        'UC-2': {
            username: 'standard_user',
            password: '',
            expectedError: 'Epic sadface: Password is required'
        },
        'UC-3': {
            username: 'standard_user',
            password: 'secret_sauce',
            expectedError: ''
        }
    }
};

export default DataProvider;

