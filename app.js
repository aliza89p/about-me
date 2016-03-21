var correctGuesses = 0;
var numOfQuestions = 0;

// var personName = prompt('Hey! I would love to get to know you a bit. What is your name?');
// console.log('Hey! I would love to get to know you a bit. What is your name?');
// alert('Wow ' + personName + ', what a fantastic name! Now it is time for a guessing game to get to know me.');
// console.log('Wow ' + personName + ', what a fantastic name! Now it is time for a guessing game to get to know me.');

var arrayQuestions = [];
var arrayAnswers = [];

var pQuesOne = document.getElementById('ques-one');
var pAnsOne = document.getElementById('ans-one');
var userInput = prompt('Is my favorite color red?');
arrayQuestions.push(pQuesOne);
if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
  pAnsOne.textContent = 'You are correct! My favorite color is not red, it is turquoise.';
  arrayAnswers.push(userInput);
}else if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
  pAnsOne.textContent = 'Wrong! My favorite color is turquoise.';
}else{
  alert('That is not a valid answer. Moving on...');
}

// var favColor = prompt('Is my favorite color red?');
// numOfQuestions++;
// console.log('Is my favorite color red?');
// if (favColor.toUpperCase() === 'NO' || favColor.toUpperCase() === 'N') {
//   alert('You are correct! My favorite color is not red, it is turquoise.');
//   console.log('You are correct! My favorite color is not red, it is turquoise.');
//   correctGuesses++;
// }
// else if (favColor.toUpperCase() === 'YES' || favColor.toUpperCase() === 'Y') {
//   alert('Wrong! My favorite color is turquoise.');
//   console.log('Wrong! My favorite color is turquoise.');
// }
// else {
//   alert('That is not a valid answer. Moving on...');
//   console.log('That is not a valid answer. Moving on...');
// }
//

var pQuesTwo = document.getElementById('ques-two');
var pAnsTwo = document.getElementById('ans-two');
var userInput = prompt('Have I been outside of the country?');
arrayQuestions.push(pQuesTwo);
if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
  pAnsTwo.textContent = 'Correct! I have been to Canada... And Mexico for about an hour...';
  arrayAnswers.push(userInput);
}else if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
  pAnsTwo.textContent = 'Wrong! I have been to Canada... And Mexico for about an hour...';
}else{
  alert('That is not a valid answer. Moving on...');
}

// var outsideCountry = prompt('Have I been outside of the country?');
// numOfQuestions++;
// console.log('Have I been outside of the country?');
// if (outsideCountry.toUpperCase() === 'NO' || outsideCountry.toUpperCase() === 'N') {
//   alert('Wrong! I have been to Canada... And Mexico for about an hour...');
//   console.log('Wrong! I have been to Canada... And Mexico for about an hour...');
// }
// else if (outsideCountry.toUpperCase() === 'YES' || outsideCountry.toUpperCase() === 'Y') {
//   alert('Correct! I have been to Canada... And Mexico for about an hour...');
//   console.log('Correct! I have been to Canada... And Mexico for about an hour...');
//   correctGuesses++;
// }
// else {
//   alert('That is not a valid answer. Moving on...');
//   console.log('That is not a valid answer. Moving on...');
// }
//

var pQuesThree = document.getElementById('ques-three');
var pAnsThree = document.getElementById('ans-three');
var userInput = prompt('Can I read music and play the piano?');
arrayQuestions.push(pQuesThree);
if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
  pAnsThree.textContent = 'Correct! I have played piano since I was a kid and studied music theory in college.';
  arrayAnswers.push(userInput);
}else if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
  pAnsThree.textContent = 'Wrong! I have played piano since I was a kid and studied music theory in college.';
}else{
  alert('That is not a valid answer. Moving on...');
}

// var playPiano = prompt('Can I read music and play the piano?');
// numOfQuestions++;
// console.log('Can I read music and play the piano?');
// if (playPiano.toUpperCase() === 'NO' || playPiano.toUpperCase() === 'N') {
//   alert('Wrong! I have played piano since I was a kid and studied music theory in college.');
//   console.log('Wrong! I have played piano since I was a kid and studied music theory in college.');
// }
// else if (playPiano.toUpperCase() === 'YES' || playPiano.toUpperCase() === 'Y') {
//   alert('Correct! I have played piano since I was a kid and studied music theory in college.');
//   console.log('Correct! I have played piano since I was a kid and studied music theory in college.');
//   correctGuesses++;
// }
// else {
//   alert('That is not a valid answer. Moving on...');
//   console.log('That is not a valid answer. Moving on...');
// }
//
// var ageVegetarian = prompt('Did I become a vegetarian as a kid?');
// numOfQuestions++;
// console.log('Did I become a vegetarian as a kid?');
// if ((ageVegetarian.toUpperCase() === 'NO') || (ageVegetarian.toUpperCase() === 'N')) {
//   alert('Wrong! I became a vegetarian when I was 11-years-old.');
//   console.log('Wrong! I became a vegetarian when I was 11-years-old.');
// }
// else if ((ageVegetarian.toUpperCase() === 'YES') || (ageVegetarian.toUpperCase() === 'Y')) {
//   alert('Correct! I have been a vegetarian since I was 11-years-old.');
//   console.log('Correct! I have been a vegetarian since I was 11 years old.');
//   correctGuesses++;
// }
// else {
//   alert('That is not a valid answer. Moving on...');
//   console.log('That is not a valid answer. Moving on...');
// }
//
// var twinSister = prompt('Is my sister my identical twin?');
// numOfQuestions++;
// console.log('Is my sister my identical twin?');
// if ((twinSister.toUpperCase() === 'NO') || (twinSister.toUpperCase() === 'N')) {
//   correctGuesses++;
//   alert('You are correct! She is my twin, but we are fraternal. Since you were correct, you get to answer one more bonus question!');
//   console.log('You are correct! She is my twin, but we are fraternal. Since you were correct, you get to answer one more bonus question!');
//   var twinSeattle = prompt('Does my sister live in Seattle?');
//   console.log('Does my sister live in Seattle?');
//   if ((twinSeattle.toUpperCase() === 'NO') || (twinSeattle.toUpperCase() === 'N')) {
//     alert('You are WRONG! She lives in Seattle.');
//     console.log('You are WRONG! She lives in Seattle.');
//   }
//   else if ((twinSeattle.toUpperCase() === 'YES') || (twinSeattle.toUpperCase() === 'Y')) {
//     alert('CORRECT! She lives in Seattle which makes me very happy :)');
//     console.log('CORRECT! She lives in Seattle which makes me very happy :)');
//     correctGuesses++;
//   }
//   else {
//     alert('That is not a valid answer. But that is okay.');
//     console.log('That is not a valid answer. But that is okay.');
//   }
// }
// else if ((twinSister.toUpperCase() === 'YES') || (twinSister.toUpperCase() === 'Y')) {
//   alert('Wrong! She is my twin, but we are not identical.');
//   console.log('Wrong! She is my twin, but we are not identical.');
// }
// else {
//   alert('That is not a valid answer. But that is okay.');
//   console.log('That is not a valid answer. But that is okay.');
// }
//
// var yearBorn = prompt('What year was I born? You get four guesses...');
// numOfQuestions++;
// console.log('What year was I born? You get four guesses...');
// var fourGuesses = 1;
// var correctYearBorn = 1989;
// yearBorn = parseInt(yearBorn);
// while (fourGuesses < 4) {
//   if (correctYearBorn === parseInt(yearBorn)){
//     correctGuesses++;
//     alert('Correct! Nice job ' + personName + '! You got ' + correctGuesses + ' out of ' + numOfQuestions + ' correct!');
//     console.log('Correct! Nice job ' + personName + '! You got ' + correctGuesses + ' out of ' + numOfQuestions + ' correct!');
//     break;
//   }
//   else if (parseInt(yearBorn) < 1989) {
//     yearBorn = prompt('Come on, I am not that old. Try again...');
//     console.log('Come on, I am not that old. Try again...');
//     fourGuesses++;
//   }
//     else if (parseInt(yearBorn) > 1989) {
//       yearBorn = prompt('I am flattered, but I am not that young. Try again...');
//       console.log('I am flattered, but I am not that young. Try again...');
//       fourGuesses++;
//     }
//     else if (isNaN(parseInt(yearBorn)) === true) {
//       yearBorn = prompt('That is not a number. Please enter a numerical year, e.g. 1843');
//       console.log('That is not a number. Please enter a numerical year, e.g. 1843');
//       fourGuesses++;
//     }
//     else {
//       yearBorn = prompt('Nice guess but try again.');
//       console.log('Nice guess but try again.');
//       fourGuesses++;
//     }
// }
// if (correctYearBorn !== parseInt(yearBorn) && fourGuesses === 4) {
//   correctGuesses++;
//   yearBorn = alert('You are out of guesses ' + personName + '. You got ' + correctGuesses + ' out of ' + numOfQuestions + ' correct!');
//   console.log('You are out of guesses ' + personName + '. You got ' + correctGuesses + ' out of ' + numOfQuestions + ' correct!');
// }
// else if (correctYearBorn === parseInt(yearBorn) && fourGuesses === 4){
//   alert('Correct! Nice job ' + personName + '! You got ' + correctGuesses + ' out of ' + numOfQuestions + ' correct!');
//   console.log('Correct! Nice job ' + personName + '! You got ' + correctGuesses + ' out of ' + numOfQuestions + ' correct!');
// }
