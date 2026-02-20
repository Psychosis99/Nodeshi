const incBut = document.getElementById("increaseBtn");
const resBut = document.getElementById("resetBtn");
const decBut = document.getElementById("decreaseBtn");
const lavelC = document.getElementById("countLabel");
let count = 0;
incBut.onclick = function (){
    count++;
   lavelC.textContent=count; 
}
resBut.onclick = function (){
    count = 0;
   lavelC.textContent=count; 
}
decBut.onclick = function (){
    count--;
   lavelC.textContent=count; 
}