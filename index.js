var randomNumber1 = Math.floor(Math.random()*6) + 1;    //no. b/w 1-6   
var randomDiceImage = "images/dice"+ randomNumber1 +".png";    //dice1.png to dice6.png

document.querySelectorAll('img')[0].setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6) + 1;    //no. b/w 1-6   
var randomDiceImage1 = "images/dice"+ randomNumber2 +".png";    //dice1.png to dice6.png

document.querySelectorAll('img')[1].setAttribute("src",randomDiceImage1);

if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
else if(randomNumber2>randomNumber1)
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
else
    document.querySelector("h1").innerHTML = "Draw";    