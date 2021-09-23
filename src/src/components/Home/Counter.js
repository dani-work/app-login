import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { formatTime } from '../../helpers/utils';

/* Counter - Get the ms start time and get the diff with the current date/time */
export const Counter = ({startTimeMs}) => {
    
    const initTimer = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    }
    const [timer, setTimer] = useState(initTimer);    

    

    useEffect(() => {

        const refreshClock = () => {

            let currentDate = Date.now();
            let difference_ms = currentDate - startTimeMs;
    
            difference_ms   = difference_ms/1000;
            let seconds     = formatTime(Math.floor(difference_ms % 60).toString());
            difference_ms   = difference_ms/60; 
            let minutes     = formatTime(Math.floor(difference_ms % 60).toString());
            difference_ms   = difference_ms/60; 
            let hours       = formatTime(Math.floor(difference_ms % 24).toString());  
            let days        = formatTime(Math.floor(difference_ms/24).toString());
    
            setTimer({days, hours, minutes, seconds})
        }

        const timerId = setInterval(refreshClock, 1000);
        return () => clearInterval(timerId);
    }, [startTimeMs]);

    return (
        <ul>
            <li><span id="days">{timer.days}</span>days</li>
            <li><span id="hours">{timer.hours}</span>Hours</li>
            <li><span id="minutes">{timer.minutes}</span>Minutes</li>
            <li><span id="seconds">{timer.seconds}</span>Seconds</li>
        </ul>
    )
}

Counter.propTypes = {
    startTimeMs: PropTypes.number.isRequired
}