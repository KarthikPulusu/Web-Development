var random_Number1=Math.floor(Math.random()*6)+1;
var random_imagesrc="images/dice"+random_Number1+".png";
document.querySelectorAll("img")[0].setAttribute("src",random_imagesrc);

var random_Number2=Math.floor(Math.random()*6)+1;
var random_imagesrc2="images/dice"+random_Number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random_imagesrc2);

if (random_Number1>random_Number2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if (random_Number1<random_Number2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw🚩"
}
