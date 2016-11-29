let myScore = 1;
let compScore = 1;
// matrix denotes Rock, Paper, Scissors along the horizontal and vertically down, respectively
// 0 = draw          -1 = win         -1 = lose
let matrix = [       
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
];
// when rock, paper or scissors is clicked myChoice value is defined as given by the 1st column of matrix
// the matrixValue is calculated by invoking matrixGenerator, which calculates the computers choice
// (0, 1, 2) == (rock, paper, scissors)
// calculate winner is then called - this function increments the necessary html element
$(document).ready(function() {
    $('#rock').click(function() {
        calculateWinner(matrixGenerator(0));     // myChoice = 0
    });
    $("#paper").click(function() {          
        calculateWinner(matrixGenerator(1));    // myChoice = 1
    });
    $("#scissors").click(function() {
        calculateWinner(matrixGenerator(2));    // myChoice = 2
    });
});
let matrixGenerator = (myChoice) => {
    return matrix[myChoice][Math.floor(Math.random()*3)];
}
let calculateWinner = (matrixValue) => {
    (matrixValue === 0) ? $("#message").html("tie") : (matrixValue === -1) ? 
    $("#computerscore").html(myScore++) && $("#message").html("Computer wins!") : 
    $("#playerscore").html(compScore++) && $("#message").html("You win!")
}
