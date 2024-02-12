document.addEventListener('DOMContentLoaded', function() {
    const timeDisplay = document.getElementById('time');
    const alarmTimeInput = document.getElementById('alarmTime');
    const setAlarmButton = document.getElementById('setAlarm');
    const clearAlarmButton = document.getElementById('clearAlarm');
    let alarmTime;
  
    // Function to update the clock display
    function updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
  
    // Function to check if the current time matches the alarm time
    function checkAlarm() {
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
  
      if (alarmTime && currentHours === alarmTime.hours && currentMinutes === alarmTime.minutes) {
        alert('Alarm! Time to wake up!');
      }
    }
  
    // Function to set the alarm time
    function setAlarm() {
      const [hours, minutes] = alarmTimeInput.value.split(':');
      alarmTime = {
        hours: parseInt(hours),
        minutes: parseInt(minutes)
      };
      alert(`Alarm is set for ${hours}:${minutes}`);
    }
  
    // Function to clear the alarm
    function clearAlarm() {
      alarmTime = null;
      alert('Alarm cleared');
    }
  
    // Update the clock every second
    setInterval(updateTime, 1000);
  
    // Check the alarm every second
    setInterval(checkAlarm, 1000);
  
    // Event listeners for setting and clearing the alarm
    setAlarmButton.addEventListener('click', setAlarm);
    clearAlarmButton.addEventListener('click', clearAlarm);
  });
  