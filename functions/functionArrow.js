let numbers = [123, 234, 345, 456, 567];
let names = ['Alex', 'Bree', 'Cara', 'Cole', 'Devon', 'Riley'];

// extract numbers greater than 300
let big = numbers.filter(function(item){
    return item > 300;
});

// Arrow function version
let bigA = numbers.filter(item => item > 300)

console.log(big);
console.log(bigA);


// Write down each name with it's index number.
names.forEach( function(name, index){
    console.log(index, name)
})

// Doing the same using an arrow function
names.forEach((name, index) => {
    console.log(index, name)
})
