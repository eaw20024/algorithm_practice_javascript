//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function valArr(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > arr[1]){
      console.log(arr[i]);
      count++;
    }
    if (arr.length <= 1) {
      console.log("This array is too short my friend!");
    }
  }
  console.log("There are " + count + " numbers greater than the second value");
  return (count);
}
valArr([1,3,5,7,9,13]);
valArr([1]);
valArr([1,3,5,7,9,10,12,15,16]);
