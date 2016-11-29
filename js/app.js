let myScore = 1;
let compScore = 1;
// matrix denotes Rock, Paper, Scissors along the horizontal with rock:(0,0), paper:(0,1), scissors:(0,2)
// similarly along the horizontal we have rock:(0,0), paper:(1,0), scissors:(2,0)
// 0 = draw          -1 = win         -1 = lose
let matrix = [       
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
];
// when rock, paper or scissors is clicked myChoice value is defined as given by the above matrix.
// the matrixValue is calculated by invoking matrixGenerator, which itself calculated the computers choice
// (0, 1, 2) == (rock, paper, scissors)
// calculate winner is then called - this function increments the necessary html element
$(document).ready(function() {
    $('#rock').click(function() {
        myChoice=0;
        var matrixValue = matrixGenerator(myChoice);
        calculateWinner(matrixValue);    
    });
    $("#paper").click(function() {  
        myChoice=1;     
        var matrixValue = matrixGenerator(myChoice);
        calculateWinner(matrixValue);
    });
    $("#scissors").click(function() {
        myChoice=2;
        var matrixValue = matrixGenerator(myChoice);
        calculateWinner(matrixValue);
    });
});
let matrixGenerator = (myChoice) => {
    return matrix[myChoice][Math.floor(Math.random()*3)];
}
let calculateWinner = (matrixValue) => {
    (matrixValue === 0) ? console.log("tie") : (matrixValue === -1) ? 
    $("#computerscore").html(myScore++) : $("#playerscore").html(compScore++)
}
