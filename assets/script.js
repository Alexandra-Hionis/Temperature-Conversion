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
    // console.log("empty");
  } else {
    fahrenheit = (celsius / 5) * 9 + 32;
    // document.getElementById("modalBody").innerHTML = `${Math.round(
    //   celsius
    // )} ℃ is equal to ${Math.round(fahrenheit)} ℉`;
    document.getElementById(
      "modalBody"
    ).innerHTML = `${celsius} ℃ is equal to ${fahrenheit} ℉`;
  }
}

// Fahrenheit to Celsius
function fahrenheitToCelsius() {
  let fahrenheit = document.getElementById("fahrenheitInput").value;
  if (fahrenheitInput.value.length == "") {
    // console.log("nothing");
  } else {
    celsius = ((fahrenheit - 32) * 5) / 9;
    // document.getElementById("modalBody").innerHTML = `${Math.round(
    //   fahrenheit
    // )} ℉ is equal to ${Math.round(celsius)} ℃`;
    document.getElementById(
      "modalBody"
    ).innerHTML = `${fahrenheit} ℉ is equal to ${celsius} ℃`;
  }
}

function inputValue() {
  let celsius = document.getElementById("celsiusInput").value;
  const fahrenheit = document.getElementById("fahrenheitInput").value;
  if (celsius == "" && fahrenheit == "") {
    document.getElementById("modalBody").innerHTML =
      "Please enter a value for ℃ or ℉";
  } else {
    celsius == "" && fahrenheit == "";
    // console.log("HI");
  }
}

// Refresh Page
function refreshPage() {
  window.location.reload();
}
