var customerName = 'bob';
var bestCustomer;
function upperCaseCustomerName() {
    console.log (customerName.toUpperCase());
  }
  
  console.log(upperCaseCustomerName());
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
  setBestCustomer();

  console.log(bestCustomer);
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  
  overwriteBestCustomer();
  console.log(bestCustomer); 
  const leastFavoriteCustomer = 'Alice';
  const changeleastFavoriteCustomer = 'Alice';

  function changeLeastFavoriteCustomer() {
  
    leastFavoriteCustomer = 'Bob';
  }