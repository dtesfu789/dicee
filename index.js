var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
var myHeading = document.querySelector("h1");
if(randomNumber1>randomNumber2){
  myHeading.textContent ="Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
myHeading.textContent = "Player 2 wins!";
}
else{
  myHeading.textContent = "Play again!";
}
