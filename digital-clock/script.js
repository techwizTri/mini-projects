function displayTime() {
  const time = new Date();
  let hrs = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const meridiem = document.querySelector(".meridiem");

  if (hrs >= 12) {
    meridiem.innerHTML = "PM";
    if (hrs > 12) hrs -= 12;
  } else {
    meridiem.innerHTML = "AM";
    if (hrs === 0) hrs = 12;
  }

  document.querySelector(".hours").innerHTML = hrs;
  document.querySelector(".minutes").innerHTML = min;
  document.querySelector(".seconds").innerHTML = sec;
}

setInterval(displayTime, 1000);
