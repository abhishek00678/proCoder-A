// Timer.js

import React, { useEffect, useState } from "react";
import topImage from "../assets/top-image.svg";
import bottomImage from "../assets/bottom-image.svg";
import rocket from "../assets/rocket.svg";
import "./timer.css"; // Import the CSS file

const Timer = () => {
  const eightDaysInSeconds = 8 * 24 * 60 * 60; // 8 days in seconds
  const [timeRemaining, setTimeRemaining] = useState(eightDaysInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          // You can perform any action when the timer reaches zero here
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / (24 * 3600));
    const hours = Math.floor((timeInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return (
      <div style={{ display: "flex", marginLeft: "75px" }}>
        <div>
          <p
            style={{
              fontSize: "20px",
              marginRight: "20px",
              fontWeight: "lighter",
            }}
          >
            Days
          </p>
          <p>{days}</p>
        </div>
        <div>
          <p
            style={{
              fontSize: "20px",
              marginRight: "20px",
              fontWeight: "lighter",
            }}
          >
            Hours
          </p>
          <p>{hours}</p>
        </div>
        <div>
          <p
            style={{
              fontSize: "20px",
              marginRight: "20px",
              fontWeight: "lighter",
            }}
          >
            Minutes
          </p>
          <p>{minutes}</p>
        </div>
        <div>
          <p
            style={{
              fontSize: "20px",
              marginRight: "20px",
              fontWeight: "lighter",
            }}
          >
            Seconds
          </p>
          <p>{seconds}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="timer-container">
      <div className="top-image">
        <img src={topImage} alt="image1" />
      </div>
      <div className="timer-content">
        <div className="timer-text-container">
          <p className="ready-to-launch">READY TO LAUNCH IN...</p>
          <p className="launch-timer">{formatTime(timeRemaining)}</p>
          <p className="more-info">Sign up to find out more about the launch</p>
          <button className="sign-up-btn">Sign Up</button>
        </div>
        <div className="rocket-image">
          <img src={rocket} alt="rocket" />
        </div>
      </div>
      <div className="bottom-image">
        <img src={bottomImage} alt="image2" />
      </div>
    </div>
  );
};

export default Timer;
