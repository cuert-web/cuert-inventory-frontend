import { styled } from "@mui/material";

export const SearchBarContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 200px;
  padding: 0 1rem;
  background-color: #f3f3f3;
  width: 300px;
  border: 1px solid #dcdcdc;
`;

export const SearchBarInput = styled("input")`
  border: none;
  outline: none;
  background-color: transparent;
  width: 90%;
`;
