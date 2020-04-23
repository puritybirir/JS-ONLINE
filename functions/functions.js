// food prices

var beer_cost = 6.75;
var burger_cost = 5.00;
var pop_cost = 3.00;

// Users money

var account_balance =  15.75;

// drink beer
function drink_beer(){
    account_balance = account_balance-beer_cost;
    console.log(account_balance);
}

// eat burger
function eat_burger(){
    account_balance = account_balance-burger_cost;
    console.log(account_balance);
}

//drink pop
function drink_pop(){
    account_balance = account_balance - pop_cost;
    console.log(account_balance);
}

// Calling the functions
drink_beer();
eat_burger();
drink_pop();

