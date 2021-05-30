

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval(function () {
    var timeSec = getSecondsSinceStartOfDay();
    var timeMin = getSecondsSinceStartOfDay()/60;
    var timeHour = getSecondsSinceStartOfDay()/3600;
    console.log(timeSec);
    var secondsDeg = (timeSec % 60)*6+180;
    var minutesDeg = (timeMin % 60)*6+180;
    var hourDeg = timeHour/12 * 360 + 180;
    // console.log(`degree: ${secondsDeg}`);
    // console.log(`degree: ${minutesDeg}`);
    // console.log(`degree: ${hourDeg}`);
    document.getElementById("seconds").style.transform = `rotate(${secondsDeg}deg)`
    document.getElementById("minutes").style.transform = `rotate(${minutesDeg}deg)`
    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`
}, 1000);



