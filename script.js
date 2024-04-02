/*
    FUNCTIONS
    Functions allow us to reuse statements
*/

/*
    Defining the function: sayHello
*/
function sayHello() {
    console.log("Hello!"); // This does not execute until we call/invoke the function
}

// Invoking or calling the function
sayHello();


/*
    Functions concept: Plug in x and then get y back.

    In this example: 
    x is name
    y is "Hello [name]!"

    Defined in the function - parameters
    @param - name
*/
function sayHelloToName(name) {
    return `Hello ${name}!`; //Template literal to include variables within string
}

/*
    Defined in the call - arguments
    @argument - "Frank"
*/
let phrase = sayHelloToName("Frank"); // phrase = "Hello Frank!"
console.log(phrase);

/*
    Passing variables to functions
*/
const help = "help";
console.log(shouter(help)); //Calling the function can be done before or after defining the function

//Defining function: shouter
function shouter(someString) {
    let loudString = someString.toUpperCase(); // loudString = "HELP"

    return loudString + "!!!"; // return "HELP!!!"
}

/*
    Function declaration
*/
function add(x, y) {
    return x + y;
}

/*
    Function expression
*/
let add = function(x, y) {
    return x + y;
}

/*
    Arrow Function expression
*/
let add = (x, y) => {
    return x + y;
}

/*
    Arrow Function expression shorthand

    NOTE: This works if you have one line of code execution.
*/
let add = (x, y) => x + y;

//Test
console.log(add(3, 5));

/*
    Ternary Operator: another way to write an if/else statement

    Suggestion: Only do this when you have one line of code to execute
*/
let isRaining = true;

// if/else statement
if (isRaining) {
    console.log("Bring a jacket");
} else {
    console.log("No need for a jacket");
}

//Same if/else written as a ternary operator
//    condition    ?  result if condition is true  :  result if condition is false
isRaining === true ? console.log("Bring a jacket") : console.log("No need for a jacket")


/*
    You can chain these together for if/else if/else. 
    I would not recommend doing this because this becomes too complicated to read.
    Keep it simple. I'm just putting it here becaues it is possible.
*/
const AQI = 340;
let result = "";
if (AQI > 300) {
  result = "Air Quality is BAD";
} else if (AQI > 200) {
  result = "Air Quality is NORMAL";
} else if (AQI > 100) {
  result = "Air Quality is GOOD";
} else {
  result = "Air Quality is EXCELLENT";
}

result = AQI > 300 ? "Air Quality is BAD" : AQI > 200 ? "Air Quality is NORMAL" : AQI > 100 ? "Air Quality is GOOD" : "Air Quality is EXCELLENT"; //if all the conditions fail