//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
var arr = [];

function lenAndVal(num1, num2){
  if (num1 == num2) {
    console.log("Jinx!")
  } else {
    for (var i = 0; i < num1; i++) {
      arr.push(num2);
    }
    console.log(arr);
    return arr;
  }
}
lenAndVal(10,2);
lenAndVal(2,2);
