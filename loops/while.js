// While loops: There are two types

// while (condition){
//     statements;
// }

// do {
//     statements
// } while (condition)

let total = 0;

while ( total < 30 ) {
    total += Math.floor(Math.random() * 5)+1;
    console.log(total);
}

do{
    total += Math.floor(Math.random() * 5) + 1;
    console.log(total);
} while(total<30);

