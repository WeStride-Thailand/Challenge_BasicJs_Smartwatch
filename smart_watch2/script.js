function getTime () {
    //Selecting
    const date = document.querySelector('.date');
    const time = document.querySelector('.time');
  
  
    //getting date & time
    const daysWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
    let currentDate = new Date();
    let currentYear = currentDate.getYear() + 1900;
    let currentMonth = months[currentDate.getMonth()];
    let currentDay_name = daysWeek[currentDate.getDay()];
    let currentDay_number = currentDate.getDate();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
  
    //transform 1 to 01
    currentHour = (currentHour < 10) ? `0${currentHour}` : currentHour;
    currentMinute = (currentMinute < 10) ? `0${currentMinute}` : currentMinute;
  
    currentSeconds = (currentSeconds < 10) ? `0${currentSeconds}` : currentSeconds;
  
  
  
  
    //date String
    let dateString = `${currentDay_name} ${currentDay_number} ${currentMonth} ${currentYear}`;
    let timeString = `${currentHour}:${currentMinute}:${currentSeconds}`;
  
  
    //changing value
    date.textContent = dateString;
    time.textContent = timeString;
  }
  
  setInterval(function () {
    getTime()
  }, 1000);