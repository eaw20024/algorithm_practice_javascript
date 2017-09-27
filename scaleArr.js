//Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.

function scaleArr(arr,num){
  if(!Array.isArray(arr)){
    console.log("This is not an array!")
    return false;
  }

  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * num;
  }
  console.log(arr)
  return arr;
}
scaleArr([1,2,3,4,5],2);
scaleArr(1,2,3,4,5,10);
scaleArr([1,2,3,4,5],3);
