let myScore = 1;
let compScore = 1;
// matrix denotes Rock, Paper, Scissors along the horizontal and vertically down, respectively
// 0 = draw          1 = win         -1 = lose
let matrix = [       
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
];
// when rock, paper or scissors icon is clicked myChoice value is defined as given by the 1st column of matrix
// the matrix element is calculated by invoking matrixGenerator, which calculates the computers choice
// (0, 1, 2) == (rock, paper, scissors) randomly
// calculate winner is then called - this function increments the necessary html element 
$(function() {
    $('#rock').click(function() {
        calculateWinner(matrixGenerator(0));    // myChoice = 0
    });
    $("#paper").click(function() {          
        calculateWinner(matrixGenerator(1));    // myChoice = 1
    });
    $("#scissors").click(function() {
        calculateWinner(matrixGenerator(2));    // myChoice = 2 
    });
});
let matrixGenerator = (myChoice) => {
    return matrix[myChoice][Math.floor(Math.random()*3)];     // GENERATE MATRIX ELEMENT 
}
let calculateWinner = (matrixValue) => {                                            // IF STATEMENTS TO OUTPUT MESSAGE AND INCREMENT SCORE
    (matrixValue === 0) ? $("#message").html("tie") : (matrixValue === -1) ? 
    $("#computerscore").html(compScore++) && $("#message").html("Computer wins!") : 
    $("#playerscore").html(myScore++) && $("#message").html("You win!");
}



