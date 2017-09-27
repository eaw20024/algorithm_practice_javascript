//Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade,
//given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’,
//60-69 should get a ‘D’, and lower than 60 receive ‘F’.
//Example: given 88, you should log "Score:88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

function letterGrade(num){
  if (num >= 93 && num <= 99){
    console.log("You've earned an A - Execellent Job")
  } else if (num >= 100){
    console.log("You've earned an A+ - Phenomonal Job")
  } else if (num >= 90 && num <= 92){
    console.log("You've earned an A- - Great Job")
  }

  if (num >= 80 && num <= 89){
    console.log("You've earned an B - Good Job")
  }

  if (num >= 70 && num <= 79){
    console.log("You've earned an C - Not Bad")
  }

  if (num >= 60 && num <= 69){
    console.log("You've earned an D - Try again next time")
  }

  if (num < 60){
    console.log("You've earned an D - You've got to study more!")
  }
}
letterGrade(91);
