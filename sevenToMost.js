//Build function that accepts array. Return a new array with all values except the
//first, adding 7 to each. Do not alter the original array.

var myArr = [];
function sevenToMost(arr){

  if(!Array.isArray(arr)){
    console.log("This is not an array!");
    return false;
  }

  for (var i = 1; i < arr.length; i++){
    myArr.push(arr[i] + 7);
  }
  console.log(myArr)
}
sevenToMost([1,2,3,4,5,6,7,8]);
sevenToMost("this","is","a","test");
sevenToMost([11,3,4,5,6,7,8,9,23]);
