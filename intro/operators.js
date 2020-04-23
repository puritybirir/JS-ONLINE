// Binary and Logical operators in Javascript

let ingridients = ["Lettuce", "Cheddar", "Ham"];

let sandwichHas = function(ingridient) {
    for( let i of ingridients){
        if (i == ingridient) {
            return true;
        }
    }
    return false;
}

// sandwichHas("Nothing");
// OR operator
if(sandwichHas("Ham") || sandwichHas("Chicken") || sandwichHas("Beef")){
    console.log("Sandwich has meat");
} else {
    console.log("No meat");
}

if(sandwichHas("Lettuce") && sandwichHas("Cheddar")){
    console.log("It has both")
} else {
    console.log("It has not both but maybe one of them")
}
