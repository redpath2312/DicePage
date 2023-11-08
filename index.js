var randomNumber1 = 1+(Math.floor(Math.random()*6));
var randomNumber2 = 1+(Math.floor(Math.random()*6));
document.querySelector(".img1").setAttribute("src", './images/dice' + randomNumber1 + '.png');
document.querySelector(".img2").setAttribute("src", './images/dice' + randomNumber2 + '.png');
var result = "";
if (randomNumber1 > randomNumber2)
{

  result = "Player 1 wins!";
  console.log(result);
}
else if (randomNumber2 > randomNumber1)
{

  result = "Player 2 wins!";
  console.log(result);
}
else
{
  result = "It's a draw!";
  console.log(result);
}
document.querySelector("h1").innerHTML = result;
