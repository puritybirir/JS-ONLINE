var dog = { "name": "Woody", "type": "dog" };
var cat = { "name": "Bob", "type": "cat" };

console.log(dog);
console.log(cat);

var petNames = ["Woody", "Bob"];
console.log(petNames);

var pets = [dog, cat];
console.log(pets);

pets.push({"name":"Roxy", "type":"dog"});

// read out loud as pets sub 2
console.log(pets[2]);

// Adding to object

cat.age = 2;
dog["age"] = 14;

console.log(pets)

