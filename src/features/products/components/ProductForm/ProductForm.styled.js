import { styled } from "@mui/material";

export const StyledProductForm = styled("form")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 4px;
`;

export const StyledSubmitButton = styled("button")`
  padding: 1rem;
  background-color: #00412a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: fit-content;
  align-self: flex-end;

  &:hover {
    background-color: #005d3a;
  }
`;
