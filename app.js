/*
var personName = prompt('Hey! I would love to get to know you a bit. What is your name?');
console.log('Hey! I would love to get to know you a bit. What is your name?');
alert('Wow ' + personName + ', what a fantastic name! Now it is time for a guessing game to get to know me.');
console.log('Wow ' + personName + ', what a fantastic name! Now it is time for a guessing game to get to know me.');

var favColor = prompt('Is my favorite color red?');
console.log('Is my favorite color red?');
if ((favColor.toUpperCase() === 'NO') || (favColor.toUpperCase() === 'N')) {
  alert('You are correct! My favorite color is not red, it is turqoise.');
  console.log('You are correct! My favorite color is not red, it is turqoise.');
}
else if ((favColor.toUpperCase() === 'YES') || (favColor.toUpperCase() === 'Y')) {
  alert('Wrong! My favorite color is turqoise.');
  console.log('Wrong! My favorite color is turqoise.');
}
else {
  alert('That is not a valid answer. Moving on...');
  console.log('That is not a valid answer. Moving on...');
}

var outsideCountry = prompt('Have I been outside of the country?');
console.log('Have I been outside of the country?');
if ((outsideCountry.toUpperCase() === 'NO') || (outsideCountry.toUpperCase() === 'N')) {
  alert('Wrong! I have been to Canada... And Mexico for about an hour...');
  console.log('Wrong! I have been to Canada... And Mexico for about an hour...');
}
else if ((outsideCountry.toUpperCase() === 'YES') || (outsideCountry.toUpperCase() === 'Y')) {
  alert('Correct! I have been to Canada... And Mexico for about an hour...');
  console.log('Correct! I have been to Canada... And Mexico for about an hour...');
}
else {
  alert('That is not a valid answer. Moving on...');
  console.log('That is not a valid answer. Moving on...');
}

var playPiano = prompt('Can I read music and play the piano?');
console.log('Can I read music and play the piano?');
if ((playPiano.toUpperCase() === 'NO') || (playPiano.toUpperCase() === 'N')) {
  alert('Wrong! I have played piano since I was a kid and studied music theory in college.');
  console.log('Wrong! I have played piano since I was a kid and studied music theory in college.');
}
else if ((playPiano.toUpperCase() === 'YES') || (playPiano.toUpperCase() === 'Y')) {
  alert('Correct! I have played piano since I was a kid and studied music theory in college.');
  console.log('Correct! I have played piano since I was a kid and studied music theory in college.');
}
else {
  alert('That is not a valid answer. Moving on...');
  console.log('That is not a valid answer. Moving on...');
}

var ageVegetarian = prompt('Did I become a vegetarian as a kid?');
console.log('Did I become a vegetarian as a kid?');
if ((ageVegetarian.toUpperCase() === 'NO') || (ageVegetarian.toUpperCase() === 'N')) {
  alert('Wrong! I became a vegetarian when I was 11-years-old.');
  console.log('Wrong! I became a vegetarian when I was 11-years-old.');
}
else if ((ageVegetarian.toUpperCase() === 'YES') || (ageVegetarian.toUpperCase() === 'Y')) {
  alert('Correct! I have been a vegetarian since I was 11-years-old.');
  console.log('Correct! I have been a vegetarian since I was 11 years old.');
}
else {
  alert('That is not a valid answer. Moving on...');
  console.log('That is not a valid answer. Moving on...');
}

var twinSister = prompt('Is my sister my identical twin?');
console.log('Is my sister my identical twin?');
if ((twinSister.toUpperCase() === 'NO') || (twinSister.toUpperCase() === 'N')) {
  alert('You are correct! She is my twin, but we are fraternal. Since you were correct, you get to answer one more bonus question!');
  console.log('You are correct! She is my twin, but we are fraternal. Since you were correct, you get to answer one more bonus question!');
  var twinSeattle = prompt('Does my sister live in Seattle?');
  console.log('Does my sister live in Seattle?');
  if ((twinSeattle.toUpperCase() === 'NO') || (twinSeattle.toUpperCase() === 'N')) {
    alert('You are WRONG! She lives in Seattle.');
    console.log('You are WRONG! She lives in Seattle.');
  }
  else if ((twinSeattle.toUpperCase() === 'YES') || (twinSeattle.toUpperCase() === 'Y')) {
    alert('CORRECT! She lives in Seattle which makes me very happy :)');
    console.log('CORRECT! She lives in Seattle which makes me very happy :)');
  }
  else {
    alert('That is not a valid answer. But that is okay.');
    console.log('That is not a valid answer. But that is okay.');
  }
}
else if ((twinSister.toUpperCase() === 'YES') || (twinSister.toUpperCase() === 'Y')) {
  alert('Wrong! She is my twin, but we are not identical.');
  console.log('Wrong! She is my twin, but we are not identical.');
}
else {
  alert('That is not a valid answer. But that is okay.');
  console.log('That is not a valid answer. But that is okay.');
}
*/

var yearBorn = prompt('What year was I born? You get four guesses...');
yearBorn = parseInt(yearBorn);
console.log('What year was I born? You get four guesses...');
var fourGuesses = 0;
var correctYearBorn = 1989;
while (fourGuesses < 4) {
  if (yearBorn === correctYearBorn) {
    alert('Awesome guess! You are correct!');
    console.log('Awesome guess! You are correct!');
    break;
  }
  // else if (yearBorn < 1989) {
  //   prompt('Come on, I am not that old. Try again...');
  //   console.log('Come on, I am not that old. Try again...');
  //   fourGuesses++;
  // }
  // else if (yearBorn > 1989) {
  //   prompt('I am flattered, but I am not that young. Try again...');
  //   console.log('I am flattered, but I am not that young. Try again...');
  //   fourGuesses++;
  // }
  // else if (yearborn.isNan()) {
  //   prompt('That is not a number. Please enter a numerical year, e.g. 1843');
  //   console.log('That is not a number. Please enter a numerical year, e.g. 1843');
  //   fourGuesses++;
  // }
  // else {
  //   prompt('Nice guess but try again.');
  //   console.log('Nice guess but try again.');
  //   fourGuesses++;
  // }





  //if (yearBorn < 1989) {
//    prompt('Come on, I am not that old. Try again...');
//    console.log('Come on, I am not that old. Try again...');
//    fourGuesses++;
//  }
    // else if (yearBorn > 1989) {
    //   prompt('I am flattered, but I am not that young. Try again...');
    //   console.log('I am flattered, but I am not that young. Try again...');
    //   fourGuesses++;
    // }
    // else if (yearborn.isNan()) {
    //   prompt('That is not a number. Please enter a numerical year, e.g. 1843');
    //   console.log('That is not a number. Please enter a numerical year, e.g. 1843');
    //   fourGuesses++;
    // }
    // else if (yearBorn != correctYearBorn) {
    //   prompt('Nice guess but try again.');
    //   console.log('Nice guess but try again.');
    //   fourGuesses++;
    // }
//    else {
//      alert('Awesome guess! You are correct!');
//      console.log('Awesome guess! You are correct!');
//      break;
//    }
}
