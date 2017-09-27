//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for (var i = 1; i <= 100; i++){
  if (i % 5 == 0){
    console.log(i + " Coding!");
  }
  if (i % 10 == 0){
    console.log(i + " Dojo!");
  }
  console.log("The number is: " + i);
}
