// Manipulating and sorting arrays in Javascript

var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters, 'Characters Array')

// Splice replaces members of the array with a specified index
// Array.splice(index of charachter to be removed, number of charachters to be removed, new entry to replace removed)
characters.splice(0, 1, 'Rey');
console.log(characters, 'Spliced characters Array')

// Splice when removing more than one
characters.splice(1, 2, 'Kylo');
console.log(characters, 'Two spliced');

// Reverse splice adding back two things
characters.splice(1, 1, 'C3P0', 'R2D2');
console.log(characters, 'Splice reverse of two');

// You can also use splice to remove items from an array and not replace them
characters.splice(1, 2,);
console.log(characters, 'No replace splice');

characters.push('BB8');
characters.push('Obiwan');
console.log(characters, 'Our current array');

characters.sort();
console.log(characters, 'Sorted array');

characters.reverse();
console.log(characters, 'Reversed array');


// Finding an item inside of an array.
// Not found is negative
var position = characters.indexOf('Luke');
console.log(position);

var position2 = characters.indexOf('Chewie');
console.log(position2);

characters.push('Chewie');

// Another similar method is lastIndexOf. It starts looking from the back.
var position3 = characters.lastIndexOf('Chewie');
console.log(position3);
