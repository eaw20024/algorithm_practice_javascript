function squareVal(arr){
  for (var i = 0; i < arr.length; i++){
    var square = arr[i] *= arr[i];
  }
  console.log(arr);
}
squareVal([1,2,3,4,5])
