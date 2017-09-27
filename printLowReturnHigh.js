//Create a function that takes array of numbers. The function should
//print the lowest value in the array, and return the highest value in the array.
var lowest;
var highest;

function highLow(arr){
  lowest = arr[0];
  highest = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > highest) {
      highest = arr[i];
    } else if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  console.log(`lowest is ${lowest}`);
  console.log(`highest is ${highest}`);
  return lowest
  return highest
}
highLow([1,-2,3,74,5,6])
