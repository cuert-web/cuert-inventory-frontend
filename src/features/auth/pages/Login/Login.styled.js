import { styled } from "@mui/material";

// those are examples of how can you style using styled from @mui/material

export const StyledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled("h1")({
  color: "red",
  fontSize: "#333",
});
