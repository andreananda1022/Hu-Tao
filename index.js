function updateClock() {
  const todays = new Date();
  let hours = todays.getHours();
  const minutes = formatTimeUnit(todays.getMinutes());
  const seconds = formatTimeUnit(todays.getSeconds());
  const periode = hours >= 12 ? "PM" : "AM";

  const day = todays.toLocaleString("default", { weekday: "long" }) + ",";
  const date = formatTimeUnit(todays.getDate());
  const month = todays.toLocaleString("default", { month: "long" })
  const year = todays.getFullYear();

  hours = hours > 12 ? hours % 12 : hours;
  hours = formatTimeUnit(hours)

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("periode").innerHTML = periode;

  document.getElementById("day").innerHTML = day;
  document.getElementById("date").innerHTML = date;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
}

setInterval(updateClock, 1000);

function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}