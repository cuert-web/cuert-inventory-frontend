import { styled } from "@mui/material";

// those are examples of how can you style using styled from @mui/material

export const BigBox1 = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 600px;
  border-radius: 20px;
  background-color: rgba(28, 29, 29, 0.5);
  color: rgba(255, 255, 255, 0.993);
  padding-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 700px) {
    margin: 0 1rem;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }
`;
