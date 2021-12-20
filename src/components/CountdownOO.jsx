import React, { useEffect, useState } from "react";

function CountdownOO(){
    const calculateTimeLeft = () => {
        const difference = +new Date(`01/31/2022 16:55`) - +new Date();
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
          <div>
            {timeLeft[interval]} {interval}{" "}
          </div>
        );
    });
    return(
        <>
          <div className="col-10 col-lg-3">
            <div className="m-4 d-flex justify-content-center" style={{backgroundColor:'var(--viridian-green', color: "white", fontSize:"1.75rem", padding: "5px"}}>
              <div>
                <h2>Opa & Oma</h2>
                {timerComponents.length ? timerComponents : <span>are in Aruba! Hurray!</span>}
              </div>
            </div>
          </div>
        </>
    )
}

export default CountdownOO;