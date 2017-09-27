//Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

function suckersHuge() {
  var count = [];
  var sum = 0;

  for ( var i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) { count.push(i);
      sum ++;
    }
  }
  console.log("The numbers are: " + count);
  console.log("The sum is: " + sum);
}
suckersHuge()
