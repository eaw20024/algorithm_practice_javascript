//Given an array, create and return a new one containing all the values of the provided array,
// made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

var myArr = [];
function negOutlook(arr){
   if(!Array.isArray(arr)){
     console.log("This is not an array!")
     return false;
   }

   for (var i = 0; i < arr.length; i++){
      myArr.push(-Math.abs(arr[i]))
   }
   console.log(myArr);

}
negOutlook([1,-3,5]);
negOutlook([1,-3,5,-3,-5,3,5,6,-1]);
negOutlook(1,-3,5);
