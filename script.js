let minutes = 0;
let seconds = 0;

const time = 1000;
let cronometer

function start(){
cronometer = setInterval(()=>{timer();}, time);
}

function pause() {
  clearInterval(cronometer)
}

function stop(){
  clearInterval(cronometer)
  minutes = 0
  seconds = 0

   document.getElementById("counter").innerText = "00:00"
}

function timer(){
  seconds++;

  if(seconds==60) {
    seconds =0;
    minutes++;

    if(minutes == 60) {
      minutes = 0;
    }
  }

  let format = (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds );

  document.getElementById("counter").innerText = format;

  return format
}

   