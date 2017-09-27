//Given array, create a function to return a new array where each value in the original
//has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

var newArr = [];

function doubleVision(arr){
  if (!Array.isArray(arr)) {
    console.log("This is not an array my friend!");
    return false;
  } else {
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i] * 2);
    }
    console.log(newArr);
    return newArr;
  }
}
doubleVision([1,2,3]);
doubleVision(1,2,"what");
