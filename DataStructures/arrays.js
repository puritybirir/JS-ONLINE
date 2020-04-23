// Arrays are basically a numbered list of items

var characters = ['Luke', 'Leia', 'Han', 'Chewie'];

console.log(characters.length);

// The index of the last charachter in the array will always been one less than it's length since we start counting from 0
console.log(characters[characters.length-1]);

// Adding charachters into an array
// Push method adds the added value to the end of the array

characters.push('Anakin');
characters.push('Obiwan');

console.log(characters);

// Removing characters in an array
// Pop starts removing from the end

console.log(characters);
characters.pop();
console.log(characters);
characters.pop();
console.log(characters);

// Adding charachters from the beginning uses Shift

characters.unshift('C3PO');
console.log(characters);
characters.unshift('R2D2');
console.log(characters);

