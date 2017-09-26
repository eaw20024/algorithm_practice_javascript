function findMax(arr){
  var max = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
  }
  console.log("Max value is: " + max)
}
findMax([11,2,3,10]);
