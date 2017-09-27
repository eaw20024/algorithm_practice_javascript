//Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
//that accepts a number of degrees in Fahrenheit, and
//returns the equivalent temperature as expressed in Celsius degrees.

//For review, Fahrenheit = (9/5 * Celsius) + 32.
var fDegrees;

function celsiusToFahrenheit(cDegrees) {
  fDegrees = ((9/5 * cDegrees) + 32);
  console.log("The Fahrenheit is: " + fDegrees)
  return fDegrees;
}


celsiusToFahrenheit(0);
celsiusToFahrenheit(43);
celsiusToFahrenheit(77);
