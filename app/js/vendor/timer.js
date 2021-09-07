const hours = document.querySelector('.timer-hours'),
minutes = document.querySelector('.timer-minutes'),
seconds = document.querySelector('.timer-seconds'),
hoursText = document.querySelector('.timer-hours__text'),
minutesText = document.querySelector('.timer-minutes__text'),
secondsText = document.querySelector('.timer-seconds__text');

let time = 900*24+100;
let timerInter = setInterval(startTimer, 1000);


function startTimer() {
  let hoursCount = Math.floor(time / 60 /60);
  let minutesCount = Math.floor((time / 60) % 60);
  let secondsCount = Math.floor(time % 60);

  hours.textContent = hoursCount < 10 ? `0${hoursCount}`: hoursCount;
  minutes.textContent = minutesCount < 10 ? `0${minutesCount}`: minutesCount;
  seconds.textContent = secondsCount < 10 ? `0${secondsCount}`: secondsCount;

  hoursText.textContent = declOfNum(hoursCount, ['час', 'часа', 'часов']);
  minutesText.textContent = declOfNum(minutesCount, ['минута', 'минуты', 'минут']);
  secondsText.textContent = declOfNum(secondsCount, ['секунда', 'секунды', 'секунд']);

  time == 0 ? clearInterval(timerInter) : time--;
}




function declOfNum(number, words) {  
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}