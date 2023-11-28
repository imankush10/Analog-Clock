const secondHand = document.querySelector('.hand-second');
const minuteHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');
const clock = document.querySelector('.clock');
const img = document.querySelector('img');

setInterval(setTime,1000);

function setTime(){
    const time = new Date();
    const secondRatio = time.getSeconds()/60;
    const minuteRatio = (secondRatio+time.getMinutes())/60;
    const hourRatio = (minuteRatio+time.getHours())/12;

    rotation(secondHand,secondRatio);
    rotation(minuteHand,minuteRatio);
    rotation(hourHand,hourRatio);
}

function rotation(elm,rotationRatio){
    elm.style.setProperty('--rotate',`${rotationRatio*360}deg`);
}
setTime();