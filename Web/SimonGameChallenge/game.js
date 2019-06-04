let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let playing = false;
let level = 0;

// This is called for every new level i.e. when the user has
// successfully matched the previous pattern.
function nextSequence() {
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    level++;
    $("#level-title").text("Level " + level)
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut().fadeIn();
    playSound(randomChosenColor);
};

// When a button is clicked by the user, this displays a visual effect
// and adds the colour to the user's pattern list.
$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

// Used for playing sounds when buttons are activated and when wrong button is pressed
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Handles the display of button presses
function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

// Listens for any key to be pressed and starts the game
// Sets the playing (game state) to true and calls the first sequence.
$(document).keydown(function () {
    if (!playing) {
        playing = true;
        nextSequence();
        $("#level-title").text("Level " + level);
    }
});

// Checks if the user's pattern matches the computer's pattern so far
// If the user has finished the current pattern, i.e. their pattern is the same
// length as the computer's and they haven't got anything wrong,
// then a new level will begin. If they pick the wrong colour, then the game ends.
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

//this resets the playing state, level and gamePattern so a new game can begin
function startOver() {
    playing = false;
    level = 0;
    gamePattern = [];
}