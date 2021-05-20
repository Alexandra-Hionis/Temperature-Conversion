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
  const celsius = document.getElementById("celsiusInput").value;
  if (celsiusInput.value.length == "") {
    // celsiusInput.value = "℃";
    console.log("empty");
  } else {
    fahrenheit = (celsius / 5) * 9 + 32;
    document.getElementById(
      "modalBody"
    ).innerHTML = `${celsius} ℃ is equal to ${fahrenheit} ℉`;
  }
}

// Fahrenheit to Celsius
function fahrenheitToCelsius() {
  const fahrenheit = document.getElementById("fahrenheitInput").value;
  if (fahrenheitInput.value.length == "") {
    // fahrenheitInput.value = "℉";
    console.log("nothing");
  } else {
    celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById(
      "modalBody"
    ).innerHTML = `${fahrenheit} ℃ is equal to ${celsius} ℉`;
  }
}

function inputValue() {
  const celsius = document.getElementById("celsiusInput").value;
  const fahrenheit = document.getElementById("fahrenheitInput").value;
  if (celsius == "" && fahrenheit == "") {
    document.getElementById("modalBody").innerHTML =
      "Please enter a value for ℃ or ℉";
  } else {
    celsius !== "" && fahrenheit !== "";
    console.log("HI");
  }
}
// Refresh Page
function refreshPage() {
  window.location.reload();
}
