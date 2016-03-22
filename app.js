var correctGuesses = 0;
var numOfQuestions = 0;

var personName = prompt('Hey! I would love to get to know you a bit. What is your name?');
console.log('Hey! I would love to get to know you a bit. What is your name?');
alert('Wow ' + personName + ', what a fantastic name! Now it is time for a guessing game to get to know me.');
console.log('Wow ' + personName + ', what a fantastic name! Now it is time for a guessing game to get to know me.');

var arrayQuestions = [];
var arrayAnswers = [];

var pQuesOne = document.getElementById('ques-one');
var pAnsOne = document.getElementById('ans-one');

function firstQuestion(){
  var userInput = prompt('Is my favorite color red?');
  numOfQuestions++;
  arrayQuestions.push(pQuesOne.textContent);
  if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
    pAnsOne.textContent = 'You are correct! My favorite color is not red, it is turquoise.';
    correctGuesses++;
    arrayAnswers.push(userInput);
  }else if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
    pAnsOne.textContent = 'Wrong! My favorite color is turquoise.';
  }else{
    alert('That is not a valid answer. Moving on...');
  }
}
firstQuestion();

var pQuesTwo = document.getElementById('ques-two');
var pAnsTwo = document.getElementById('ans-two');

function questionTwo(){
  var userInput = prompt('Have I been outside of the country?');
  numOfQuestions++;
  arrayQuestions.push(pQuesTwo.textContent);
  if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
    pAnsTwo.textContent = 'Correct! I have been to Canada... And Mexico for about an hour...';
    correctGuesses++;
    arrayAnswers.push(userInput);
  }else if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
    pAnsTwo.textContent = 'Wrong! I have been to Canada... And Mexico for about an hour...';
  }else{
    alert('That is not a valid answer. Moving on...');
  }
}
questionTwo();

var pQuesThree = document.getElementById('ques-three');
var pAnsThree = document.getElementById('ans-three');

function questionThree(){
  var userInput = prompt('Can I read music and play the piano?');
  numOfQuestions++;
  arrayQuestions.push(pQuesThree.textContent);
  if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
    pAnsThree.textContent = 'Correct! I have played piano since I was a kid and studied music theory in college.';
    correctGuesses++;
    arrayAnswers.push(userInput);
  }else if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
    pAnsThree.textContent = 'Wrong! I have played piano since I was a kid and studied music theory in college.';
  }else{
    alert('That is not a valid answer. Moving on...');
  }
}
questionThree();

var pQuesFour = document.getElementById('ques-four');
var pAnsFour = document.getElementById('ans-four');

function questionFour(){
  var userInput = prompt('Did I become a vegetarian as a kid?');
  numOfQuestions++;
  arrayQuestions.push(pQuesFour.textContent);
  if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
    pAnsFour.textContent = 'Correct! I have been a vegetarian since I was 11-years-old.';
    correctGuesses++;
    arrayAnswers.push(userInput);
  }else if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
    pAnsFour.textContent = 'Wrong! I became a vegetarian when I was 11-years-old.';
  }else{
    alert('That is not a valid answer. Moving on...');
  }
}
questionFour();

var pQuesFive = document.getElementById('ques-five');
var pAnsFive = document.getElementById('ans-five');
function questionSix(){
  var pQuesSix = document.getElementById('ques-six');
  var pAnsSix = document.getElementById('ans-six');
  arrayAnswers.push(userInput);
  var userInput = prompt('Does my sister live in Seattle?');
  numOfQuestions++;
  arrayQuestions.push(pQuesSix.textContent);
  if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
    pAnsSix.textContent = 'CORRECT! She lives in Seattle which makes me very happy :)';
    correctGuesses++;
    arrayAnswers.push(userInput);
  }else if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
    pAnsSix.textContent = 'You are WRONG! She lives in Seattle.';
  }else{
    alert('That is not a valid answer. Moving on...');
  }
}

function questionFive(){
  var userInput = prompt('Is my sister my identical twin?');
  numOfQuestions++;
  arrayQuestions.push(pQuesFive.textContent);
  if(userInput.toUpperCase() === 'NO' || userInput.toUpperCase() === 'N'){
    pAnsFive.textContent = 'You are correct! She is my twin, but we are fraternal. Since you were correct, you get to answer one more bonus question!';
    correctGuesses++;
    questionSix();
  }else if(userInput.toUpperCase() === 'YES' || userInput.toUpperCase() === 'Y'){
    pAnsFive.textContent = 'Wrong! She is my twin, but we are not identical.';
  }else{
    alert('That is not a valid answer. Moving on...');
  }
}
questionFive();

var pQuesSeven = document.getElementById('ques-seven');
var pAnsSeven = document.getElementById('ans-seven');

function questionSeven(){
  var fourGuesses = 0;
  while(fourGuesses < 4 && userInput !== 1989){
    var userInput = prompt('What year was I born? You get four guesses...');
    numOfQuestions++;
    arrayQuestions.push(pQuesSeven.textContent);
    if(parseInt(userInput) === 1989){
      correctGuesses++;
      pAnsSeven.textContent = 'Correct! Nice job ' + personName + '! You got ' + correctGuesses + ' out of ' + numOfQuestions + ' correct!';
      arrayAnswers.push(userInput);
      console.log('correct year born guessed');
      break;
    }else if(parseInt(userInput) < 1989){
      pAnsSeven.textContent = 'Come on, I am not that old. Try again...';
      fourGuesses++;
    }else if(parseInt(userInput) > 1989){
      pAnsSeven.textContent = 'I am flattered, but I am not that young. Try again...';
      fourGuesses++;
    }else{
      alert('That is not a valid answer. Moving on...');
      fourGuesses++;
    }
  }
}
questionSeven();

function results(){
  alert('Great job ' + personName + '. You got ' + correctGuesses + ' out of ' + numOfQuestions + ' correct!');
}
results();
