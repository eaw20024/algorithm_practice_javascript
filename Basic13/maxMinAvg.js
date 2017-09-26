function maxMinAvg(arr){
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];

  for (var i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }

    if (arr[i] > max){
      max = arr[i];
    }
 h
    sum += arr[i]
  }
  console.log("Min value is " + min)
  console.log("Max value is " + max)
  console.log("The avg value is: " + sum / arr.length);
}
maxMinAvg([1,2,3,4,5,6]);
