//Your function should accept an array. If the value at [0] is greater than array’s length, print "Too big!";
//if the value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitTheVal(arr){

    if (!Array.isArray(arr)) {
        console.log("This is not an array.");
        return false;
    }

    if (arr[0] > arr.length){
      console.log("This array is: Too Big!");
    } else if (arr[0] < arr.length) {
      console.log("This array is: Too small!");
    } else {
      console.log("This array is: Just Right!")
    }
    
  }

fitTheVal([1,2])
fitTheVal([2])
fitTheVal([2,2])
fitTheVal(2)
