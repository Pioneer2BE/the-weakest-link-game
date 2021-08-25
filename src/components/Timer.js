import React, {useContext} from 'react'
import { formatTime } from '../modules/utils';
import TimerContext from '../context/TimerContext';

const Timer = () => {

    const {timerVal, setTimerVal} = useContext(TimerContext)

    // Start with an initial value of 20 seconds
    const TIME_LIMIT = 20;

    // Initially, no time has passed, but this will count up
    // and subtract from the TIME_LIMIT
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;

    let timerInterval = null;

    const startTimer = () => {
        
        timerInterval = setInterval(() => {

            if(timeLeft > 0)
            {
                // The amount of time passed increments by one
                timePassed++;
                timeLeft = TIME_LIMIT - timePassed;
                
                // The time left label is updated
                setTimerVal(formatTime(timeLeft));
                console.log(formatTime(timeLeft));
            }
            else
            {
                clearInterval(timerInterval)
            }

        }, 1000);

    }

    return (
    
        <div className="base-timer">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                    <path
                        id="base-timer-path-remaining"
                        strokeDasharray="283"
                        className="base-timer__path-remaining"
                        d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                        "
                    ></path>
                </g>
            </svg>
            <span className="base-timer__label">
                {timerVal}
            </span>
        </div>

    )
}

export default Timer
