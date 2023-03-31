const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  // for seconds Hand:
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  // for minutes Hand:
  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  // for hour Hand:
  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  //console.log(seconds);
  //console.log(minutes);
  //console.log(hour);
}

setInterval(setDate, 1000); //to get the seconds in miliseconds
setDate();
