let start_button = document.querySelector(".start-button");
let stop_button = document.querySelector(".stop-button");
let time_display = document.querySelector(".time-display");
let task_input = document.querySelector(".task-input").value = "    ";
let start = false;
let timer = 2500
let minutes = 2;
let seconds = 00;
let interval;
time_display.innerHTML = "25:00";
start_button.addEventListener("click",()=>{
  start = true;
  interval = setInterval(Update,1000);
})
stop_button.addEventListener("click",()=>{
  clearInterval(interval);
})
  
  

function Update(){
  if(seconds == 0){
    minutes--;
    seconds = 60;
  }
  seconds--;
  if(seconds < 10){
    time_display.innerHTML = `${minutes}:0${seconds}`;
  }
  else{ 
    time_display.innerHTML = `${minutes}:${seconds}`;
  }
  if(minutes == 0 && seconds == 0){
    clearInterval(interval);
  }
}