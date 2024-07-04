// Player1 Code
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dudo" + randomNumber1 + ".png"; //dudo.png - dudo6.png
var randomImageSource = "images/" + randomDiceImage; //images/dudo1.png - images/dudo6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
// console.log(image1);

// Player2 Code
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dudo" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
