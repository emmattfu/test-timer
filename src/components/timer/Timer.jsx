import React, { useEffect, useState } from "react";

import {
  StyledDeleteIcon,
  StyledPauseIcon,
  StyledPlayIcon,
  StyledTimer,
  StyledTimerClock,
  StyledTimerName,
  StyledTimerWrapper,
} from "./styled";

export const Timer = ({ timer }) => {
  const [time, setTime] = useState(timer.time);

  useEffect(() => {
    let interval = null;

    if (timer.isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timer.isActive) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer.isActive]);

  return (
    <StyledTimerWrapper>
      <StyledTimerName>{timer.name}</StyledTimerName>
      <StyledTimer>
        <StyledTimerClock>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </StyledTimerClock>
        {timer.isActive ? <StyledPauseIcon /> : <StyledPlayIcon />}
        <StyledDeleteIcon />
      </StyledTimer>
    </StyledTimerWrapper>
  );
};
