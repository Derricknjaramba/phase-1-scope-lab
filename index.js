
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName= customerName.toUpperCase();
}




var bestCustomer; // Declaring bestCustomer in global scope

function setBestCustomer() {
    bestCustomer = 'not bob'; // Setting the value of bestCustomer
}




function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}


const leastFavoriteCustomer = 'Alice'; // Declaring a constant

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'john'; // Attempting to change the constant
}

module.exports={
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer

};

  
