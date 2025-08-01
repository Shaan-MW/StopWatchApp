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


    //To erase previous lap times when reset clicked.
    const lapTimes = document.querySelectorAll('li');
    lapTimes.forEach(removeElements);
}

function removeElements(element){
    element.remove();
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


const redTheme = document.querySelector('.red');
const greenTheme = document.querySelector('.green');
const yellowTheme = document.querySelector('.yellow');
const blueTheme = document.querySelector('.blue');
const bodyElement = document.querySelector('body');


redTheme.addEventListener('click',changeBgColortoRed);
yellowTheme.addEventListener('click',changeBgColortoYellow);
greenTheme.addEventListener('click',changeBgColortoGreen);
blueTheme.addEventListener('click',changeBgColortoBlue);

const btns=document.querySelectorAll('button');


function changeBgColortoRed(){
    bodyElement.classList.remove('yellow');
    bodyElement.classList.remove('green');
    bodyElement.classList.remove('blue');
    bodyElement.classList.add('red');

    btns.forEach(changeColor);
    function changeColor(element){
        element.style.backgroundColor = '#E41b17';
    }

}

function changeBgColortoYellow(){

    bodyElement.classList.remove('green');
    bodyElement.classList.remove('blue');
    bodyElement.classList.remove('red');
    bodyElement.classList.add('yellow');

    
    btns.forEach(changeColor);
    function changeColor(element){
        element.style.backgroundColor = 'purple';
    }
}

function changeBgColortoGreen(){
        bodyElement.classList.remove('blue');
    bodyElement.classList.remove('red');
    bodyElement.classList.remove('yellow');
    bodyElement.classList.add('green');

    
    btns.forEach(changeColor);
    function changeColor(element){
        element.style.backgroundColor = '#228c22';
    }
}
function changeBgColortoBlue(){
        bodyElement.classList.remove('red');
    bodyElement.classList.remove('yellow');
    bodyElement.classList.remove('green');
    bodyElement.classList.add('blue');

    
    btns.forEach(changeColor);
    function changeColor(element){
        element.style.backgroundColor = '#388ad6';
    }
}