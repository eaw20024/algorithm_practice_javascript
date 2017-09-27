//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".
//If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
 if(!Array.isArray(arr)){
   console.log("This is not an array!")
   return false;
 }

  var hasFood = false;
  for (var i = 0; i < arr.length; i++){
    if(arr[i] == "food"){
      console.log("yummy")
      hasFood = true;
    }
  }
  if (hasFood == false) {
      // log "I'm hungry."
      console.log("I'm hungry.");
  }

}
alwaysHungry(["juice", "dog food", "chicken", "rice"]);
alwaysHungry(["cat chow", "water", "ricecakes"]);
alwaysHungry(["apple","cheese","fool","food","gasoline"])
alwaysHungry("food", "beans");
