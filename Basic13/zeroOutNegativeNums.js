//Return the given array, after setting any negative values to zero.

function zeroOutNegativeNums(arr){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = 0;
    }
  }
  console.log(arr);
}
zeroOutNegativeNums([1,3,-4,6,-7]);
