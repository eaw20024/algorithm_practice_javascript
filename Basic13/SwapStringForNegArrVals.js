//Given an array of numbers, replace any negative values with the string 'Dojo'

function swapStringForNegVals(arr){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  console.log(arr);
}
swapStringForNegVals([-1,2,3,-4,-5])
