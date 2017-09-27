//Stan learned something today: that reducing an array’s .length immediately shortens it by that amount.
//Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter).
//Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function keepLastFew(arr,num){
  if(!Array.isArray(arr) || !Number.isInteger(num)){
    return false;
  } else if (num >= arr.length){
    console.log("num is greater than or equal to arrays length!");
    return false;
  }

  arr.splice(0,num)
  console.log(arr);
  return arr;
}
keepLastFew([1,2,3,4,5],3);
keepLastFew(1,2,3,4,5,3);
keepLastFew([2,3,4,5,6,7],2);
