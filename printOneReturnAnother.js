//Build a function that takes array of numbers. The
//function should print second-to-last value in the array, and return first odd value in the array.

var odd;
var secondToLast;

function printOne(arr){
  if(!Array.isArray(arr)){
    console.log("This is not an array my friend!");
    return false;
  } else {
    console.log(`${arr[arr.length-2]} is the second to last array.`);

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0){
        console.log("The first odd number in the array is: " + arr[i]);
        return arr[i];
      }
    }
  }
}
printOne([1,2,3,4,5])
printOne([22,12,33,84,50])
