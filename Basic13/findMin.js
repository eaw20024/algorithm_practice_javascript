function findMin(arr){
  var min = arr[0]
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  console.log("Min value is: " + min)
}
findMin([27,18,13,43,5,12,3,64,55])
