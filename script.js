let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let result = 0;
let count = 0;

function addOne(){
  homeScore.textContent = result++;
}
function addTwo(){
  homeScore.textContent = result += 2;
}
function addThree(){
  homeScore.textContent = result += 3;
}
function addOneMore(){
  guestScore.innerText = count++;
}
function addTwoMore(){
  guestScore.textContent = count += 2;
}
function addThreeMore(){
  guestScore.textContent = count += 3;
}
function resetBtn(){
  homeScore.innerText = result = 0;
  guestScore.innerText = count = 0;
}