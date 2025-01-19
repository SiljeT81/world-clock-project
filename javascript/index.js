function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
