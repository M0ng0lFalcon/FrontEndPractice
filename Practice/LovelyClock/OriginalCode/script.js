function MyTime() {
  let time = new Date();
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();

  // hour part
  document.getElementById("1").innerHTML = Math.floor(hh / 10);
  document.getElementById("2").innerHTML = hh % 10;

  // minute part
  document.getElementById("4").innerHTML = Math.floor(mm / 10);
  document.getElementById("5").innerHTML = mm % 10;

  // second part
  document.getElementById("7").innerHTML = Math.floor(ss / 10);
  document.getElementById("8").innerHTML = ss % 10;
}

// init time
MyTime();

// run MyTime fun per second
setInterval(MyTime, 1000);
