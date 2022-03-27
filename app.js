"use strict";

//Getting elements
const rockEl = document.querySelector(".rock");
const paperEl = document.querySelector(".paper");
const scissorsEl = document.querySelector(".scissors");
const youEl = document.querySelector(".you");
const compEl = document.querySelector(".comp");
const notificationEl = document.querySelector(".notification");
const newGameEl = document.querySelector(".new-game");

//generates and returnes a number between 1 and 3
const numberGenerator = () => {
  const max = 3,
    min = 1;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
  return randomNumber;
};

let you = null;
let comp = null;

rockEl.addEventListener("click", () => {
  const randomNumber = numberGenerator();

  switch (randomNumber) {
    case 1:
      notificationEl.textContent = "Rock : Rock";
      //add a class win to both result numbers and remove it after 1s
      compEl.classList.add("win");
      youEl.classList.add("win");
      setTimeout(function () {
        compEl.classList.remove("win");
        youEl.classList.remove("win");
      }, 1000);
      break;
    case 2:
      comp += 1;
      compEl.textContent = comp;
      notificationEl.textContent = "Rock : Paper";
      //add a class win to a computer result number and remove it after 1s
      compEl.classList.add("win");
      setTimeout(function () {
        compEl.classList.remove("win");
      }, 1000);
      break;
    case 3:
      you += 1;
      youEl.textContent = you;
      notificationEl.textContent = "Rock : Scissors";
      //add a class win to my result number and remove it after 1s
      youEl.classList.add("win");
      setTimeout(function () {
        youEl.classList.remove("win");
      }, 1000);
      break;
  }
});

paperEl.addEventListener("click", () => {
  const randomNumber = numberGenerator();

  switch (randomNumber) {
    case 1:
      you += 1;
      youEl.textContent = you;
      notificationEl.textContent = "Paper : Rock";
      //add a class win to my result number and remove it after 1s
      youEl.classList.add("win");
      setTimeout(function () {
        youEl.classList.remove("win");
      }, 1000);
      break;
    case 2:
      notificationEl.textContent = "Paper : Paper";
      //add a class win to both result numbers and remove it after 1s
      compEl.classList.add("win");
      youEl.classList.add("win");
      setTimeout(function () {
        compEl.classList.remove("win");
        youEl.classList.remove("win");
      }, 1000);
      break;
    case 3:
      comp += 1;
      compEl.textContent = comp;
      notificationEl.textContent = "Paper : Scissors";
      //add a class win to a computer result number and remove it after 1s
      compEl.classList.add("win");
      setTimeout(function () {
        compEl.classList.remove("win");
      }, 1000);
      break;
  }
});

scissorsEl.addEventListener("click", () => {
  const randomNumber = numberGenerator();

  switch (randomNumber) {
    case 1:
      comp += 1;
      compEl.textContent = comp;
      notificationEl.textContent = "Scissors : Rock";
      //add a class win to a computer result number and remove it after 1s
      compEl.classList.add("win");
      setTimeout(function () {
        compEl.classList.remove("win");
      }, 1000);
      break;
    case 2:
      you += 1;
      youEl.textContent = you;
      notificationEl.textContent = "Scissors : Paper";
      //add a class win to my result number and remove it after 1s
      youEl.classList.add("win");
      setTimeout(function () {
        youEl.classList.remove("win");
      }, 1000);
      break;
    case 3:
      notificationEl.textContent = "Scissors : Scissors";
      //add a class win to both result numbers and remove it after 1s
      compEl.classList.add("win");
      youEl.classList.add("win");
      setTimeout(function () {
        compEl.classList.remove("win");
        youEl.classList.remove("win");
      }, 1000);
      break;
  }
});

//reset everything
newGameEl.addEventListener("click", () => {
  you = null;
  comp = null;

  youEl.textContent = "0";
  compEl.textContent = "0";
  notificationEl.textContent = "";
});
