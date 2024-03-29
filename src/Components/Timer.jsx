import React, { useEffect } from "react";
import "./Timer.css"; // Import the CSS file

const Timer = () => {
  let timeinterval;
  useEffect(() => {
    const getTimeRemaining = (endtime) => {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    };

    const initializeClock = (endtime) => {
      const timeinterval = setInterval(() => {
        const t = getTimeRemaining(endtime);
        document.querySelector(".days > .value").innerText = t.days;
        document.querySelector(".hours > .value").innerText = t.hours;
        document.querySelector(".minutes > .value").innerText = t.minutes;
        document.querySelector(".seconds > .value").innerText = t.seconds;
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }, 1000);
    };
    initializeClock(`2023/12/10`);

    return () => {
      clearInterval(timeinterval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div
      style={{
        marginTop: window.innerWidth > 600 ? "4%" : "20%" ,
      }}
      className='container centerIt'
    >
      <div>
        <label className='project-title'>FundSpirit</label>
        <label className='project-name'>
          Unlocking the future of crowdfunding with blockchain technology -
          Coming Soon!
        </label>
      </div>
      <div className='counter'>
        <div className='days'>
          <div className='value'>00</div>
          <span>Days</span>
        </div>
        <div className='hours'>
          <div className='value'>00</div>
          <span>Hours</span>
        </div>
        <div className='minutes'>
          <div className='value'>00</div>
          <span>Minutes</span>
        </div>
        <div className='seconds'>
          <div className='value'>00</div>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
