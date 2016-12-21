// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function() {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var rps = ["rock", "paper", "scissors"];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
    var generater = Math.floor(Math.random() * 3)

    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
    rps[generater];
var i = rps[generator];
    // Task 1, Step 4: return this new value
    return i;

};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function(userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    //   var winner = if (y<x,y>z,x=rock,y=paper,z=scissors ){
           
    //   }
    if (userChoice == computerChoice){
        console.log("draw");
    }
    if (userChoice == "rock" && computerChoice == "paper"){
        console.log("computerwins")
    }
    if (userChoice == "rock" && computerChoice == "scissors"){
        console.log("userwins");
    }
    if (userChoice == "paper" && computerChoice == "rock"){
        console.log("userwins");
    }
    if (userChoice == "paper" && computerChoice == "scissors"){
        console.log("computerwins");
    }
    if (userChoice)
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    $('#computer-choice').html(computerChoice);
    // Task 5: Show the winner in HTML after the word "Winner:"
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = null;
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create click handlers that changes the
    // value of userChoice based on the item the user clicks on the HTML page.
    $(".choice").click(function(e){
        var element = e.target;
        console.log(element.id);
    })
    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    pickWinner(userChoice, computerChoice);
    //Final Task: comment out the pickWinner function on the line above and place it within your click functions created in Task 3.
    //this is done so the computer does not pick its throw until the user has also done so.


});
