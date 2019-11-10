import React, { useState } from 'react'
import Countdown from 'react-countdown-now';
import useAsync from '../useAsync'
import { json } from '../rest'

const ContestCountdown = () => {
    const [now] = useState(Date.now());
    const { value: time, loading } = useAsync(json, `time`, []);
   
    return (
        <div id="timer" style={{ color: '#b8c7ce', textAlign: 'center', fontSize: '36px' }}>
            {!loading &&
                <Countdown date={now + time.timeTillEnd} daysInHours={true} >
                    <span>Състезанието приключи</span>
                </Countdown>
            }
        </div>
    )
}

export default ContestCountdown
