//Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr,y){
  var numGreater = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > y){
      numGreater++;
    }
  }
  console.log("%d numbers are greater than %d", numGreater, y)
}
greaterThanY([1,2,3,4,5],2)
