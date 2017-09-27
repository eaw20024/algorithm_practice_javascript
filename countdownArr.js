//Create a function that accepts a number as an input. Return a new array that counts down by one, from the number
//(as array’s ‘zero’th element) down to 0 (as the last element). How long is this array?


function countdown(num) {
    var myArray = [];
    for (var i = num; i >= 0; i--) {
        myArray.push(i);
    }
    console.log(myArray);
    console.log("The length of myArr is: " + myArray.length);
    return myArray;
}
countdown(10);
