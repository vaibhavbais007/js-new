const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Noida"; // bad practice
let accountState;
console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
