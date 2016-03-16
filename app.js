var personName = prompt('Hey! I would love to get to know you a bit. What is your name?');
console.log('Hey! I would love to get to know you a bit. What is your name?');
alert('Wow ' + personName + ', what a fantastic name!');
console.log('Wow ' + personName + ', what a fantastic name!');

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
  alert('That is not a valid answer. Please answer yes or no.');
  console.log('That is not a valid answer. Please answer yes or no.');
}
