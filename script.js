const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

const startBtn = document.getElementById('start');
const lapBtn = document.getElementById('lap');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

const lapsList = document.getElementById('laps');

let currentMinutes = 0;
let currentSeconds = 0;
let currentMilliseconds = 0;
let interval;

startBtn.addEventListener('click',startTimer);
lapBtn.addEventListener('click',saveLap);
pauseBtn.addEventListener('click',pauseTimer);
resetBtn.addEventListener('click',resetTimer);

function startTimer(){
    interval=setInterval(updateTimer, 10);
    startBtn.disabled = true;
}

function saveLap(){
    const lapTime = `${padTime(currentMinutes)}:${padTime(currentSeconds)}:${padTime(currentMilliseconds)}`;
    const li =document.createElement('li');
    li.textContent=lapTime;
    lapsList.appendChild(li);
}

function pauseTimer(){
    clearInterval(interval);
    startBtn.disabled=false;
}

function resetTimer(){
    currentMilliseconds=0;
    currentMinutes=0;
    currentSeconds=0;
    clearInterval(interval);
    setTimer();
    startBtn.disabled = false;
    const listTagName= document.getElementsByTagName("li");
    listTagName.removeChild();
    
}

function updateTimer(){
    currentMilliseconds++;
    if(currentMilliseconds===100){
        currentMilliseconds=0;
        currentSeconds++;
        if(currentSeconds===60){
            currentSeconds=0;
            currentMinutes++;
        }
    }
    setTimer();
}

function setTimer(){
    milliseconds.textContent = padTime(currentMilliseconds);
    seconds.textContent = padTime(currentSeconds);
    minutes.textContent=padTime(currentMinutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}