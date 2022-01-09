/* eslint-disable */
import "bootstrap";
import "./style.css";

var topSuit = document.querySelector(".top-suit");
var number = document.querySelector(".number");
var botSuit = document.querySelector(".bottom-suit");
var butNewCard = document.querySelector(".btn-primary");

var arrNum = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
var arrSuit = ["\u2660", "\u2663", "\u2665", "\u2666"];

window.onload = function() {
  //write your code here
  let theNum = Math.floor(Math.random() * 14);
  let theSuit = Math.floor(Math.random() * 4);

  number.innerText = arrNum[theNum];
  topSuit.innerText = arrSuit[theSuit];
  botSuit.innerText = arrSuit[theSuit];

  if (theSuit === 2 || theSuit === 3) {
    topSuit.classList.add("colorRed");
    botSuit.classList.add("colorRed");
  }
};

//new card buttom reload web for new card
butNewCard.addEventListener("click", function() {
  window.location.reload();
});

//timer that generates new card every 10seconds
setInterval(function() {
  window.location.reload();
}, 10000); //run this thang every 10 seconds
