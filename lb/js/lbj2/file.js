const userInput = prompt("Enter a number:");

if (isNaN(userInput)) {
  console.error("Please enter a number:");
} else {
 // let number = parseInt(userInput);
 let number = userInput;
  const massifOfFive = [];
  for (let i = 0; i <= number; i++) {
    if (i % 5 === 0) {
        massifOfFive.push(i);
    }
  }
  if (massifOfFive.length === 0) {
    console.log("Sorry, no numbers");
  } else {
    console.log("Numbers, multiples 5:", massifOfFive);
  }
}