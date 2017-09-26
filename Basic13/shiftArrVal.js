//Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

function shiftArrVal(arr){
  for (var i = 1; i < arr.length; i++){
    arr[i - 1] = arr[i];
  }
    arr[arr.length - 1] = 0;
    console.log(arr);
}
shiftArrVal([1,2,3,4,5]);
