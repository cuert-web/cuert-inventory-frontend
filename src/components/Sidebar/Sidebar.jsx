import {
  Avatar,
  Collapse,
  List,
  // ListItemButton,
  // ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AvatarContainer,
  IconDiv,
  StyledAside,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledNavLink,
} from "./Sidebar.styled";
import avatar from "@/assets/avatar.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const [openSuppliers, setOpenSuppliers] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpenSuppliers(!openSuppliers);
  };

  return (
    <StyledAside>
      <AvatarContainer>
        <Avatar alt="avatar" src={avatar} sx={{ width: 80, height: 80 }} />
        <p>username</p>
      </AvatarContainer>
      <StyledList>
        <li>
          <StyledNavLink to="/dashboard">
            <HomeRoundedIcon />
            <p>Home</p>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/reports">
            <AssessmentRoundedIcon />
            <p>Reports</p>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">
            <Inventory2RoundedIcon />
            <p>Products</p>
          </StyledNavLink>
        </li>
        <li>
          <StyledListItem onClick={handleClick}>
            <IconDiv>
              <InventoryRoundedIcon />
              <p>Suppliers</p>
            </IconDiv>
            {openSuppliers ? <ExpandLess /> : <ExpandMore />}
          </StyledListItem>
        </li>
        <Collapse in={openSuppliers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledListItemButton sx={{p:0.4, pl: 4 }} onClick={()=>navigate("/suppliers")}>
              <ListItemText primary="View Suppliers" />
            </StyledListItemButton>
            <StyledListItemButton sx={{p:0.4,  pl: 4 }} onClick={()=>navigate("/suppliers/add-supplier")}>
              <ListItemText primary="Add Supplier" />
            </StyledListItemButton>
          </List>
        </Collapse>
        <li>
          <StyledNavLink to="/user">
            <PersonRoundedIcon />
            <p>User</p>
          </StyledNavLink>
        </li>
      </StyledList>
    </StyledAside>
  );
};

export default Sidebar;
