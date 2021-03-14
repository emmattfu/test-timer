import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 520px;
  padding: 15px 20px;
  border-radius: 30px;
  border: 0.5px solid black;
  outline: none;
  font-size: 16px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;
