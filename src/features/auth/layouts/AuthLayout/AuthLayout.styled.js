import { styled } from "@mui/material";
import car1 from "@/features/auth/assets/car1.jpg";

export const StyledContainer = styled("div")`
  /* make this div span the whole page */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  background-image: url(${car1});
  background-size: cover;
  /* background-size: 100% 100%; */
  /* background-position: bottom; */
  background-position: center;
  background-repeat: no-repeat;
`;
