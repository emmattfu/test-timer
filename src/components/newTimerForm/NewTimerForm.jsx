import React, { useCallback, useState } from "react";
import { StyledForm, StyledInput } from "./styled";
import { StyledButton } from "../../styled";
import { MdPlayArrow } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTimer } from "../../store/slices/TimersSlice";
import { nanoid } from "nanoid";

export const NewTimerForm = () => {
  const [timerName, setTimerName] = useState("");
  const dispatch = useDispatch();

  const inputChangeHandle = useCallback((e) => {
    setTimerName(e.target.value);
  }, []);

  const addNewTimer = useCallback(
    (e) => {
      e.preventDefault();

      const newTimer = {
        name: timerName,
        isActive: true,
        createdAt: Date.now(),
        time: 0,
        id: nanoid(),
      };

      dispatch(addTimer(newTimer));
    },
    [dispatch, timerName]
  );

  return (
    <StyledForm onSubmit={addNewTimer}>
      <StyledInput
        type='text'
        value={timerName}
        placeholder='Enter tracker name'
        onChange={inputChangeHandle}
      />
      <StyledButton type='submit'>
        <MdPlayArrow />
      </StyledButton>
    </StyledForm>
  );
};
