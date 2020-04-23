// food prices

var beer_cost = 6.75;
var burger_cost = 5.00;
var pop_cost = 3.00;

// Users money
var account_balance =  15.75;
// Check account balance
function checkBalance(amt){
    if( account_balance - amt >= 0){
        return true;
    } else {
        console.log("INSUFFICIENT FUNDS")
        return false;
    }
}

// drink beer
function drink_beer(){
    if(checkBalance(beer_cost)){
        account_balance = account_balance-beer_cost;
        console.log("Enjoy your beer")
    } 
    console.log('\tBalance:', account_balance.toFixed(2));
}

// eat burger
function eat_burger(){
    if(checkBalance(burger_cost)){
        account_balance = account_balance-burger_cost;
        console.log("Enjoy your burger")
    } 
    console.log('\tBalance:', account_balance.toFixed(2));
}

//drink pop
function drink_pop(){
    if(checkBalance(pop_cost)){
        account_balance = account_balance - pop_cost;
        console.log("Enjoy your burger")
    } 
    console.log('\tBalance:', account_balance.toFixed(2));
}

// Visit the carnival, eat and drink

var mealList = [drink_beer, drink_pop, eat_burger, drink_beer];

function visitCarnival(mLIst){
    for(var i=0, num=mLIst.length; i<num; i++){
        mLIst[i].call();
    }
}

visitCarnival(mealList);

