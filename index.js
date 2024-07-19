// Declare a global variable customerName using var
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Assigning directly in global scope
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Changing the value of bestCustomer in global scope
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone';

// Declare customerName in global scope with initial value 'bob'
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  // Ensure we keep the initial value case-insensitive
  customerName = customerName.charAt(0).toUpperCase() + customerName.slice(1).toLowerCase();
  return customerName;
}
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

// Function to set bestCustomer
function setBestCustomer() {
  // Declare bestCustomer in global scope
  bestCustomer = 'not bob';
  return bestCustomer;
}
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane Smith'; // Attempt to reassign, will throw an error
}


  
