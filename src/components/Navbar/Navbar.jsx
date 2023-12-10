import { useState } from "react";
import { Box, Drawer, Grid, IconButton } from "@mui/material";
import { StyledMenu, StyledNav } from "./Navbar.styled";
import Logo from "@/components/Logo/Logo";
import { Logout, Menu } from "@mui/icons-material";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledNav>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <StyledMenu>
            <Box
              component={IconButton}
              display={{ xs: "flex", md: "none" }}
              onClick={() => setOpen(true)}
            >
              <Menu
                sx={{
                  color: "#fff",
                }}
              />
            </Box>
            <Logo />
          </StyledMenu>
          <IconButton>
            <Logout
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
        </Grid>
      </StyledNav>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Sidebar />
      </Drawer>
    </>
  );
};

export default Navbar;
