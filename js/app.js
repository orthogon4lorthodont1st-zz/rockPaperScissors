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
// (0, 1, 2) == (rock, paper, scissors) randomly
let choices = ["#rock", "#paper", "#scissors"];
let myChoice = [0, 1, 2];
let myArray = $.merge(choices, myChoice);
// loop through and target rock paper or scissors and  pass in myChoice by means of myArray
// no matter which one is clicked, calculate winner is called
    $(function() {
        for(let j=0; j<3; j++){
            $(myArray[j]).click(function() {
                calculateWinner(matrixGenerator(myArray[j+3]));
            });
        }
    });
// the matrix element is calculated by invoking matrixGenerator, which calculates the computers choice
let matrixGenerator = (myChoice) => {
    return matrix[myChoice][Math.floor(Math.random()*3)];    
}
let calculateWinner = (matrixValue) => {                  // the logic of the game
    (matrixValue === 0) ? $("#message").html("tie") : (matrixValue === -1) ? 
    $("#computerscore").html(compScore++) && $("#message").html("Computer wins!") : 
    $("#playerscore").html(myScore++) && $("#message").html("You win!");
}



