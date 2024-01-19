import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialDuration, delay }) => {
  const [duration, setDuration] = useState(initialDuration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration((prevDuration) => {
        if (prevDuration > 0) {
          return prevDuration - 1;
        } else {
          // Reset the countdown after reaching 0
          setTimeout(() => {
            setDuration(initialDuration);
          }, delay * 1000);

          // Clear the interval
          clearInterval(intervalId);

          return 0;
        }
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [duration, initialDuration, delay]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}H: ${String(minutes).padStart(2, '0')}M: ${String(seconds).padStart(2, '0')}S`;
  };

  return (
    <div className='countdown'>
      <p className='offer'>Get 25% Off This Summer Sale. Grab It Fast!!!</p>
      <p className='countdown-timer'>{formatTime(duration)}</p>
    </div>
  );
};

export default CountdownTimer;
