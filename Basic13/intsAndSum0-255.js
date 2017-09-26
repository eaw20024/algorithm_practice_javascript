function printIntAndSums(){
  var sum = 0;
  for (var num = 0; num <= 255; num++){
    sum += num;
    console.log("New Number: " + num + " Sum: " + sum);
  }
}
printIntAndSums();
