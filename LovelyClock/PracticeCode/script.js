function MyTime() {
  const time = new Date();
  const hh = time.getHours();
  const mm = time.getMinutes();
  const ss = time.getSeconds();

  console.log(hh, mm, ss);

  document.getElementById("hour").innerHTML = hh < 10 ? "0" + hh : hh;
  document.getElementById("minute").innerHTML = mm < 10 ? "0" + mm : mm;
  document.getElementById("second").innerHTML = ss < 10 ? "0" + ss : ss;
}

MyTime();

setInterval(MyTime, 500);
