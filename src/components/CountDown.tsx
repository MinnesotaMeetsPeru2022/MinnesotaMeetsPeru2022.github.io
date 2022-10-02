import { Box, Typography } from '@mui/material';
import { DateTime, Duration } from 'luxon';
import { useLayoutEffect, useState } from 'react';

// 5:30 PM, November 26, 2022
const WEDDING_DATE_PERU_STANDARD_TIME = '2022-11-26T17:30:00-05:00'; // GMT-5

function getCountdownDuration(): Duration {
    const weddingDateTime = DateTime.fromISO(WEDDING_DATE_PERU_STANDARD_TIME);
    return weddingDateTime.diffNow('milliseconds').shiftTo('days', 'hours', 'minutes', 'seconds');
}

type DurationState = {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
};

export default function CountDown() {
    const [duration, setDuration] = useState<DurationState | null>(null);

    function updateDuration() {
        const { days, hours, minutes, seconds } = getCountdownDuration();
        setDuration({
            days: Math.floor(days).toString(),
            hours: Math.floor(hours).toString(),
            minutes: Math.floor(minutes).toString(),
            seconds: Math.floor(seconds).toString(),
        });
    }

    useLayoutEffect(() => {
        const intervalId = setInterval(updateDuration, 1000);
        return () => clearInterval(intervalId);
    }, [duration]);

    if (!duration) {
        return <Typography>Initializing...</Typography>;
    }

    const { days, hours, minutes, seconds } = duration;

    return (
        <Box>
            <Typography>{days} Days</Typography>
            <Typography>{hours} Hours</Typography>
            <Typography>{minutes} Minutes</Typography>
            <Typography>{seconds} Seconds</Typography>
        </Box>
    );
}
