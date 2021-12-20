function timeConversion(s) {
  const time = s.split(':');
  const ampm = time[2].slice(-2);
  time[2] = time[2].slice(0, 2);
  if (ampm == 'PM') {
    time[0] = time[0] != '12' ? String(Number(time[0]) + 12) : time[0];
  } else if (ampm == 'AM') {
    time[0] = time[0] != '12' ? time[0] : '00';
  }
  time[0] = time[0].length == 1 ? `0${time[0]}` : time[0];
  return time.join(':');
}

// console.log(timeConversion('06:40:03AM'));
// console.log(timeConversion('07:05:45PM'));
// console.log(timeConversion('12:40:22AM'));
console.log(timeConversion('12:45:54PM'));
