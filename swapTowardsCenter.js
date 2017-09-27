//Given array, swap first and last, third and third-tolast, etc.
//Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardsCenter(arr){
  if(!Array.isArray(arr)){
    console.log("This is not an array!")
    return false;
  }

  var temp;
  var count = 1;
  for (var i = 0; i < arr.length/2; i+=2){
    temp = arr[i]
    arr[i] = arr[arr.length-count];
    arr[arr.length-count] = temp;
    count+=2;
  }
  console.log(arr);

}
swapTowardsCenter([1,2,3,4,5,6]);
swapTowardsCenter([true,42,"Ada",2,"pizza"]);
swapTowardsCenter(true,42,"Ada",2,"pizza");
