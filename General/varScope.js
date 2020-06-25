// Variable Scope


// Variable declared outside a function
var name = 'Aragorn';

function x(){
    // Variable declared inside a function is called a local variable
    var name = 'Gimli'

    // without var then it is created on a global scope
    other = 'Legolas'
    console.log(name);
}



console.log(name);
x();
y();


function y(){
    console.log(name);
    console.log(other);
}