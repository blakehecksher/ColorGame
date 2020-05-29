var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Easy and Hard Buttons
for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        if(this.textContent === "Easy"){
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset();
    });
}

// Reset Button
resetButton.addEventListener("click", function () {
    reset();
})

// Selected Color
colorDisplay.textContent = pickedColor;

// Color Squares
for (var i = 0; i < squares.length; i++){
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    // add click listener to squares
    squares[i].addEventListener("click", function(){
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?"

        }   else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

// FUNCTIONS ---------------------------------------------
function changeColors(color){
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    // Change each color to match given color
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // Make an array
    var arr = [];
    // Add num random colors to array
    for (let i = 0; i < num; i++) {
        // Get random color and push into array
        arr.push(randomColor())

    }
    // return that array
    return arr;
}

function randomColor(){
    // Pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // Pick a "green" from 0-255
    var g =Math.floor(Math.random() * 256);
    // Pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+ g +", "+ b + ")"
}

function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }   else {
            squares[i].style.display= "none";
        }
    }


    // change text content back
    resetButton.textContent = "New Colors";
    // change h1 background back
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}