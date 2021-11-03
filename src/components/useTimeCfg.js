import { useState, useEffect } from 'react';

export default function useTimeCfg() {
    const [date, setDate] = useState(new Date());
    const tick = () => { 
        setDate(new Date())
    };

    const colorConfig = {
        morning: {
            backgroundColor: '#C4C4C4',
            circleColor: '#0038FF',
            invertBaseColor: false
        },
        midday: {
            backgroundColor: '#D5D8B1',
            circleColor: '#1CED56',
            invertBaseColor: false
        },
        evening: {
            backgroundColor: '#000',
            circleColor: '#EBFF00',
            invertBaseColor: true
        },
        night: {
            backgroundColor: '#000',
            circleColor: '#EBFF00',
            invertBaseColor: true
        }
    };

    const getConfigByTime = () => {
        const hour = date.getHours();
        return {
            backgroundColor: '#000',
            circleColor: '#1CED56',
            invertBaseColor: true
        }

        /*
        if (hour >= 6 && hour < 12) {
            return colorConfig.morning;
        } else if (hour >= 12 && hour < 17) {
            return colorConfig.midday;
        } else if (hour >= 17 && hour < 21) {
            return colorConfig.evening;
        } else {
            return colorConfig.night;
        }
        */
    }

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
        };
    }, [date])

  return getConfigByTime();
}