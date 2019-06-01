var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var heading = document.querySelector("h1");
var p1_dice = document.querySelector(".img1");
var p2_dice = document.querySelector(".img2");

p1_dice.setAttribute("src", "images/dice" + randomNumber1 + ".png");
p2_dice.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins!"
}
else {
    heading.textContent = "It's a tie!"
}