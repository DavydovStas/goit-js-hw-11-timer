const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
}

class CountdownTimer {
  constructor({ onTick, targetDate }) {
    this.onTick = onTick;
    this.targetDate = targetDate;
  }
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate- currentTime;
      const time = this.getTimeComponents(deltaTime)

      this.onTick(time);
      }, 1000)
  };

getTimeComponents(time) {
    const days = this.addZeroToValue(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.addZeroToValue(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.addZeroToValue(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.addZeroToValue(Math.floor((time % (1000 * 60)) / 1000));
  
  return { days, hours, mins, secs };
};

addZeroToValue(value) { return String(value).padStart(2, '0'); };
}

const timer = new CountdownTimer({
  onTick: updateClockFace,
  targetDate: new Date('Jul 17, 2019'),
});

timer.start(timer)


function updateClockFace({ days, hours, mins, secs }) { 
  refs.days.textContent = days;
  refs.hours.textContent = hours; 
  refs.minutes.textContent = mins; 
  refs.seconds.textContent = secs;
}