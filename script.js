const time = document.querySelector("#stopwatchTime");
const resetElement = document.querySelector("#reset");
const pauseElement = document.querySelector("#pause");
const playElement = document.querySelector("#play");

// initiall the reset and pause buttons are hidden
// when the play button is pressed, it will be set to hidden and the pause and reset buttons appear. 
// again, when pause is pressed, it will be set to hidden and the play button will be set to visible.
pauseElement.style.display = "none";
resetElement.style.display = "none";

let seconds = 0;
let hours = 0;
let minutes = 0;
let second = 0;
// this will set time in the stopwatch with 2 digit place for seconds, minutes and hours.
time.textContent = `${hours.toString().padStart(2, "0")}: ${minutes.toString().padStart(2, "0")}: ${second.toString().padStart(2, "0")}`;

// add handler when the play button is pressed.
playElement.addEventListener("click", ()=>{
    playElement.style.display ="none";
    pauseElement.style.display = "inline-block";
    resetElement.style.display = "inline-block";
    const timer = setInterval(()=>{
    seconds++;

    //below code contains the logic to calculate hours, mins and seconds from the seconds. 
    // the stopwatch record seconds which are converted using logic to hours minutes and seconds.
    hours = Math.floor(seconds / 3600).toString().padStart(2, "0");
    minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0"); 
    second =  (seconds % 60).toString().padStart(2, "0"); 
    console.log(seconds)
    time.textContent = `${hours}: ${minutes}: ${second}`;
    
    pauseElement.addEventListener("click", ()=>{
        clearInterval(timer);
        playElement.style.display ="inline-block";
        pauseElement.style.display = "none";
    })

    resetElement.addEventListener("click", ()=>{
        clearInterval(timer);
        seconds = 0;
        time.textContent = "00: 00: 00"         // time is reset to 00:00:00 when the reset button is pressed.
        playElement.style.display ="inline-block";
        pauseElement.style.display = "none";
        resetElement.style.display = "none";
    })

    },1000)             //setInterval is set to 1000ms i.e., time will change every 1 second.
});


