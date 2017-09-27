//Kyle (smarter than Kenny) notes that the chance of one disaster is totally unrelated to the chance of another.
//Change whatHappensToday() function to create whatReallyHappensToday().
//In this new function test for each disaster independently, instead of assuming exactly one disaster will happen.
//In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

function whatReallyHappened(){
  var randNum = (Math.floor(Math.random() * (101 - 1) + 1));

  if (randNum >= 1 && randNum <= 10){
    console.log("Volcano")
  }

  if (randNum >= 1 && randNum <= 15){
    console.log("Tsunami")
  }

  if (randNum >= 1 && randNum <= 20){
    console.log("Earthquake")
  }

  if (randNum >= 1 && randNum <= 25){
    console.log("BLizzard");
  }

  if (randNum >= 1 && randNum <= 30){
    console.log("Meteor Strike")
  }

  if (randNum > 30){
    console.log("Nothing Happened!")
  }
}
whatReallyHappened();
