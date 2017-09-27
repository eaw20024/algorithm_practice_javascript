//Given array of numbers, create function to replace last value with number of positive values.
//Example: countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

var newArr = [];

function countPos(arr){
  var count = 0;
  if(!Array.isArray(arr)){
    console.log("This is not an array!");
    return false
  } else {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] > 0) {
        count += 1;
      }
    }
    arr[arr.length-1] = count;
    console.log(arr)
    return arr;
  }
}
countPos([-1,1,1,1])
countPos("what",1,2,3)
