import { MdPauseCircleOutline, MdPlayCircleOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import styled from "styled-components";

export const StyledTimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StyledTimerName = styled.p`
  font-weight: bold;
  margin-left: 22px;
`;

export const StyledTimer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
`;

export const StyledTimerClock = styled.div`
  margin-right: 20px;
`;

export const StyledPlayIcon = styled(MdPlayCircleOutline)`
  font-size: 30px;
  cursor: pointer;
  margin: 0 5px;
`;

export const StyledPauseIcon = styled(MdPauseCircleOutline)`
  font-size: 30px;
  cursor: pointer;
  margin: 0 5px;
`;

export const StyledDeleteIcon = styled(FiMinusCircle)`
  font-size: 30px;
  cursor: pointer;
  color: #d2697a;
  margin: 0 5px;
`;
