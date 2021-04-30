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

// Celsius to fahrenheit
function celsiusToFahrenheit() {
  var celsius = document.getElementById("celsiusInput").value;
  if (celsiusInput.value.length == "") {
    celsiusInput.value = "℃";
    console.log("empty");
  } else {
    fahrenheit = (celsius / 5) * 9 + 32;
    console.log(`${fahrenheit}`);
  }
}

// Fahrenheit to celsius
function fahrenheitToCelsius() {
  var fahrenheit = document.getElementById("fahrenheitInput").value;
  if (fahrenheitInput.value.length == "") {
    fahrenheitInput.value = "℉";
    console.log("nothing");
  } else {
    celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(`${celsius}`);
  }
}

// Modal
document.querySelector("#submit").click(function () {
  var celsius = document.querySelector("#celsiusInput").value;
  var fahrenheit = document.querySelector("#fahrenheitInput").value;
  var str =
    "You Have Entered " +
    "degrees: " +
    celsius +
    " and fahrenheit: " +
    fahrenheit;
  document.querySelector("#modal_body").html(str);
});
