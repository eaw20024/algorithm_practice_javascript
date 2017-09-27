//Given array, write a function that reverses values, in-place.
//Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

function reverseArr(arr){
  var temp;
  var count = 1;

  if(!Array.isArray(arr)){
    console.log("This is not an array")
    return false;
  }

  for (var i = 0; i < arr.length/2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length-count];
    arr[arr.length-count] = temp;
    count += 1;
  }
  console.log(arr);

}
reverseArr([3,1,6,4,2]);
reverseArr([13,11,16,14,12,20,23,34,55]);
reverseArr(1,2,3,5,6,2);
