// Function Declaration if degrees is 25 celsius

// function celsiusToFahrenheit(celsius) {
//   fahrenheit = (celsius / 5) * 9 + 32;
//   return `25 degrees celsius is ${fahrenheit} degrees fahrenheit`;
// }
// console.log(celsiusToFahrenheit(25));

// Arrow function if degrees is 25 celsius
// const celsiusToFahrenheit = (celsius) => (fahrenheit = (celsius / 5) * 9 + 32);
// console.log(celsiusToFahrenheit(25));

// Celsius to Fahrenheit
function celsiusToFahrenheit() {
  var celsius = document.getElementById("celsiusInput").value;
  if (celsiusInput.value.length == "") {
    celsiusInput.value = "℃";
    alert("empty");
  } else {
    fahrenheit = (celsius / 5) * 9 + 32;
    document.getElementById(
      "modalBody"
    ).innerHTML = `${celsius} ℃ is equal to ${fahrenheit} ℉`;
  }
}

// Fahrenheit to Celsius
function fahrenheitToCelsius() {
  var fahrenheit = document.getElementById("fahrenheitInput").value;
  if (fahrenheitInput.value.length == "") {
    fahrenheitInput.value = "℉";
    console.log("nothing");
  } else {
    celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById(
      "modalBody"
    ).innerHTML = `${fahrenheit} ℃ is equal to ${celsius} ℉`;
  }
}

// Refresh Page
function refreshPage() {
  window.location.reload();
}
