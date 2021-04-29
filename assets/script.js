// Function Declaration if degrees is 25 celsius

// function celsiusToFahrenheit(celsius) {
//   fahrenheit = (celsius / 5) * 9 + 32;
//   return `25 degrees celsius is ${fahrenheit} degrees fahrenheit`;
// }
// console.log(celsiusToFahrenheit(25));

// Arrow function if degrees is 25 celsius
// const celsiusToFahrenheit = (celsius) => (fahrenheit = (celsius / 5) * 9 + 32);
// console.log(celsiusToFahrenheit(25));

// Need to grab number from input box and insert into function

// const fahrenheitToCelsius = (fahrenheit) => ()

// .value is a property of text boxes where we can take the value inside the text box and store it in our str variable
function celsiusToFahrenheit() {
  var str = document.getElementById("celsiusInput").value;
  fahrenheit = (str / 5) * 9 + 32;
  console.log("Value inside the text box is: " + fahrenheit);
}

function fahrenheitToCelsius() {
  var hi = document.getElementById("fahrenheitInput").value;
  celsius = ((hi - 32) * 5) / 9;
  console.log("Value inside the text box is: " + celsius);
}
