//Create a function that accepts an array. Every time that array has three odd values in a row,
//print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"


function evenOdds(arr){

  if (!Array.isArray(arr)){
    console.log("This is not an array");
    return false;
  }

  var evenCount = 0;
  var oddCount = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      evenCount += 1;
      oddCount = 0;
    }  else {
      evenCount = 0;
      oddCount += 1;
  }

   if (evenCount === 3) {
     console.log("Even more so!");
     evenCount = 0;
   }

   if (oddCount === 3) {
     console.log("Thats Odd!");
     oddCount = 0;
   }

 }

}
evenOdds([1,567,-123,-23,1,70,3,1,7,-8]);
evenOdds(2,1,3,4,6,8,2);
