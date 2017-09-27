
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
function printAll() {
  var count = [];
  var sum = 0;

  for ( var i = 512; i < 4096; i++) {
    if ( 0 === i % 5) { count.push(i);
      sum ++;
    }
  }
  console.log("The numbers are: " + count);
  console.log("The total number of multiples are: " + sum);
}
printAll()
