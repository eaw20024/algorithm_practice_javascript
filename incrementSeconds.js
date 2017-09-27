//Given an array of numbers arr, add 1 to every second element, specifically those
//whose index is odd (arr[1], [3], [5], etc). Afterward, console.log each array value and return arr.

function incrementSecs(arr){
  if(!Array.isArray(arr)){
    console.log("This is not an array!")
    return false;
  }

  for (var i = 0; i < arr.length; i++){
    if (i % 2 !== 0){
      arr[i] += 1;
      }
  }

  console.log(arr);
  return arr;

}
incrementSecs([0,2,0,3,0,1,0,7,9]);
incrementSecs(1,2,3,5,6,7);
