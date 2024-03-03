document.addEventListener('DOMContentLoaded', function() {
  const timeDisplay = document.getElementById('time');
  const alarmHoursInput = document.getElementById('alarmHours');
  const alarmMinutesInput = document.getElementById('alarmMinutes');
  const alarmSecondsInput = document.getElementById('alarmSeconds');
  const ampmSelect = document.getElementById('ampm');
  const setAlarmButton = document.getElementById('setAlarm');
  const alarmsList = document.getElementById('alarmsList');
  let alarms = [];

  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    // Update time display with AM/PM designation
    timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}


  function setAlarm() {
    const hours = parseInt(alarmHoursInput.value);
    const minutes = parseInt(alarmMinutesInput.value);
    const seconds = parseInt(alarmSecondsInput.value);
    const ampm = ampmSelect.value;

    alarms.push({ hours, minutes, seconds, ampm });
    renderAlarms();
  }

  function renderAlarms() {
    alarmsList.innerHTML = '';
    alarms.forEach((alarm, index) => {
      const li = document.createElement('li');
      li.textContent = `${alarm.hours}:${alarm.minutes}:${alarm.seconds} ${alarm.ampm}`;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteAlarm(index));
      li.appendChild(deleteButton);
      alarmsList.appendChild(li);
    });
  }

  function deleteAlarm(index) {
    alarms.splice(index, 1);
    renderAlarms();
  }

  function checkAlarms() {
    const now = new Date();
    let currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();
    let currentAmPm = currentHours >= 12 ? 'pm' : 'am';

    // Convert current hours to 12-hour format
    if (currentHours > 12) {
        currentHours -= 12;
        currentAmPm = 'pm';
    } else if (currentHours === 0) {
        currentHours = 12;
        currentAmPm = 'am';
    }

    console.log(`Current Time: ${currentHours}:${currentMinutes}:${currentSeconds} ${currentAmPm}`);

    alarms.forEach((alarm, index) => {
        console.log(`Alarm Time: ${alarm.hours}:${alarm.minutes}:${alarm.seconds} ${alarm.ampm}`);
      
        // Compare alarm time with current time in 12-hour format
        if (
            alarm.hours === currentHours &&
            alarm.minutes === currentMinutes &&
            alarm.seconds === currentSeconds &&
            alarm.ampm === currentAmPm
        ) {
            console.log('Alarm! Time to wake up!');
            alert('Alarm! Time to wake up!');
            deleteAlarm(index);
        }
    });
}






  setInterval(updateTime, 1000);
  setInterval(checkAlarms, 1000);

  setAlarmButton.addEventListener('click', setAlarm);
});
