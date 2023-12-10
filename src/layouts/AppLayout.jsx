import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Box, Grid, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Navbar />
      <Grid container alignItems="stretch" sx={{ flexGrow: 1 }}>
        <Box component={Grid} display={{ xs: "none", md: "flex" }} item md={2}>
          <Sidebar />
        </Box>
        <Grid item xs={12} md={10} padding="1rem 1rem">
          <Outlet />
        </Grid>
      </Grid>
    </StyledAppLayout>
  );
};

export default AppLayout;
