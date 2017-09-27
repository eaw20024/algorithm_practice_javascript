//Based from earlier “Countdown By Fours”, given (lowNum, highNum, mult), print the numbers in multiples of mult from highNum down to lowNum, using a FOR loop.
//Example: For (2,9,3), print 9 6 3 (on successive lines).

function flexCount(lowNum, highNum, multi) {
  for (var i = highNum; i > lowNum; i--){
    if (i % multi == 0){
      console.log(i);
    }
  }
}
flexCount(2,10,2);
