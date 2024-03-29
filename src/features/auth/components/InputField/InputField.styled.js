import { styled } from "@mui/material";

export const StyledInputField = styled("input")`
  width: 350px;
  border-radius: 20px;
  height: 30px;
  color: aliceblue;
  background: transparent;
  outline: none;
  border: 2px solid
    ${({ isError }) => (isError ? "#f44336" : "rgba(131, 119, 119, 0.452)")};
  padding-left: 1rem;
  margin-top: 5px;
  max-width: 100%;
  &::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

export const StyledInputContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledError = styled("p")`
  color: #f44336;
  font-size: 0.8rem;
  margin-top: 5px;
  padding-left: 1rem;
`;
