//Kenny tries to stay safe, but somehow everyday something happens.
//If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard,
//and 30% chance of meteor strike, write function whatHappensToday() to print the outcome.

function poorKenny(){
  var disasterNum = Math.floor((Math.random() * (101 -1)) - 1)

  if (disasterNum >= 1 && disasterNum <= 10){
    console.log("Volcano");
  } else if (disasterNum > 10 && disasterNum <= 30){
    console.log("Earthquake");
  } else if (disasterNum > 30 && disasterNum <= 55){
    console.log("Blizzard");
  } else if (disasterNum > 55 && disasterNum <= 85){
    console.log("Meteor Strike");
  } else {
    console.log("Nothing Happened")
  }
}
poorKenny();
