import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Box, Grid, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";

const StyledAppLayout = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <UserProvider>
        <Navbar />
        <Grid container alignItems="stretch" sx={{ flexGrow: 1 }}>
          <Box
            component={Grid}
            display={{ xs: "none", md: "flex" }}
            item
            md={2}
          >
            <Sidebar />
          </Box>
          <Grid
            item
            xs={12}
            md={10}
            padding={2}
            sx={{
              height: "calc(100vh - 4rem)",
              overflowY: "auto",
            }}
          >
            <Outlet />
          </Grid>
        </Grid>
      </UserProvider>
    </StyledAppLayout>
  );
};

export default AppLayout;
