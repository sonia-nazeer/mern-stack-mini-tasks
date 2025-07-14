let name1 = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");
alert(`Hello ${name1}, you are ${age} years old and live in ${city}.`);
//age analysis
let category = "";
if (age < 13) {
  category = "Child";
} else if (age >= 13 && age <= 19) {
  category = "Teenager";
} else if (age >= 20 && age <= 59) {
  category = "Adult";
} else {
  category = "Senior";
}
alert(`You are categorized as a ${category}.`);
//favorite color switch case 
let color = prompt("What is your favorite color?").toLowerCase();

switch (color) {
  case "red":
    alert("Bold choice!");
    break;
  case "blue":
    alert("Cool and calm.");
    break;
  case "green":
    alert("Nature lover!");
    break;
  default:
    alert("Unique taste!");
    break;
}
//favorite number for loop
let favNum = parseInt(prompt("Enter your favorite number:"));

for (let i = 1; i <= favNum; i++) {
  if (i === 5) continue; 
  if (i === 10) break;   
  console.log(i);
}

//calculateageinmonths
function calculateAgeInMonths(age) {
    return age * 12;
  }
  let ageInMonths = calculateAgeInMonths(age);
  console.log(`Your age in months is ${ageInMonths}.`);
//hobbysugesstion
function suggestHobby(age) {
    if (age < 13) {
      return "Try drawing or riding a bicycle!";
    } else if (age <= 19) {
      return "How about playing video games or learning to code?";
    } else if (age <= 59) {
      return "You might enjoy hiking or reading books.";
    } else {
      return "Gardening or puzzles can be very relaxing.";
    }
  }
  let hobby = suggestHobby(age);
  alert(hobby);
  