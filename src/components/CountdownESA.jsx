import React, { useEffect, useState } from "react";

function CountdownESA(){
    const calculateTimeLeft = () => {
        const difference = +new Date(`02/02/2022`) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
          }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });
    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
    });
    return(
        <>
          <div className="m-4">
            <div className="d-flex justify-content-center" style={{backgroundColor:'var(--steel-teal', color: "white", fontSize:"40px"}}>
                  <h2>Erika, Stefan, & Anja:</h2>
              </div>
              <div className="d-flex justify-content-center" style={{backgroundColor:'var(--steel-teal', color: "white", fontSize:"40px"}}>
                  {timerComponents.length ? timerComponents : <span>are in Aruba! Hurray!</span>}
              </div>
            </div>
        </>
    )
}

export default CountdownESA;