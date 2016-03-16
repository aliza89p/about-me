var personName = prompt('Hey! I would love to get to know you a bit. What is your name?');
alert('Wow ' + personName + ', what a fantastic name!');
console.log('Hey! I would love to get to know you a bit. What is your name?');

var favColor = prompt('Is my favorite color red?');
var yesString = 'yes' || 'y';
var noString = 'no' || 'n';
if (favColor.toUpperCase() === yesString.toUpperCase()) {
  alert('Wrong! My favorite color is turqoise.');
}
else if (favColor.toUpperCase() === noString.toUpperCase()) {
  alert('You are correct! My favorite color is not red, it is turqoise.');
}
else {
  alert('That is not a valid answer. Please answer yes or no.');
}
console.log('Is my favorite color red?');

alert(favColor + '! My favorite color is turqoise');
console.log('Where was I born?');

var myAge = confirm('What is my age?');
alert('You guessed ' + myAge + '. I am 26 years old, but I will be 27 in the beginning of April');
console.log('You would not want to be any younger, right...?');

var personPets = confirm('Do you have any pets?');
alert('I see you answered ' + personPets + '. Pets are sweet but I totally understand not wanting any.');
console.log('Do you have any pets?');

var dogsCats = confirm('Are dogs better than cats?');
alert('That is ' + dogsCats + '! Dogs are better than cats.');
console.log('Are dogs better than cats?');

var amazingDay = confirm('It was great getting to know you. I hope you have an amazing day! Do you wish the same for me?');
alert('I see you answered ' + amazingDay + ' to me having an amazing day. Well, I had my coffee so I think it is going to be a good day! Bye!');
console.log('It was great getting to know you. I hope you have an amazing day! Do you wish the same for me?');
