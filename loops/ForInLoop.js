// Javascript for...in loops
var monsters = {
    Canada: 'Sasquach',
    Nepal: 'Yeti',
    Scotland: 'Loch Ness Monster'
};

for (let prop in monsters){
    console.log(prop);
    console.log(monsters[prop]);
}

// You can also use for in to loop through an array. the difference will be in that prop will be the index of the array.

var pets = ["Wood", "Roxy", "Bob"];

for (let prop in pets){
    console.log(prop);
    console.log(pets[prop]);
}
