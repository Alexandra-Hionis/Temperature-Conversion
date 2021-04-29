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
  if (celsiusInput.value.length == 0) {
    celsiusInput.value = "℃";
    console.log("empty");
  } else {
    fahrenheit = (str / 5) * 9 + 32;
    alert("Value inside the text box is: " + fahrenheit);
  }
}
function fahrenheitToCelsius() {
  var hi = document.getElementById("fahrenheitInput").value;
  if (fahrenheitInput.value.length == 0) {
    fahrenheitInput.value = "℉";
    console.log("empty");
  } else {
    celsius = ((hi - 32) * 5) / 9;
    alert("Value inside the text box is: " + celsius);
  }
}
