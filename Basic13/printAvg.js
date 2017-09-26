function printAvg(arr){
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++){
    sum += arr[i];
  }
  console.log("Avg value is " + sum / arr.length)
}
printAvg([1,2,3,4])
