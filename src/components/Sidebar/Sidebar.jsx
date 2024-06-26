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
import { useAuth } from "@/hooks/useAuth";

const Sidebar = () => {
  const [openSuppliers, setOpenSuppliers] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const navigate = useNavigate();

  const {user, isLoading} = useAuth();

  const handleClick = () => {
    setOpenSuppliers(!openSuppliers);
  };

  const handleClickProduct = () => {
    setOpenProducts(!openProducts);
  };

  return (
    <StyledAside>
      <AvatarContainer>
        <Avatar alt="avatar" src={avatar} sx={{ width: 80, height: 80, marginBottom: 1 }} />
        <p>{!isLoading && user?.data?.full_name || "username"}</p>
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
          <StyledListItem onClick={handleClickProduct}>
            <IconDiv>
              <Inventory2RoundedIcon />
              <p>Products</p>
            </IconDiv>
            {openProducts ? <ExpandLess /> : <ExpandMore />}
          </StyledListItem>
        </li>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledListItemButton
              sx={{ p: 0.4, pl: 4 }}
              onClick={() => navigate("/products")}
            >
              <ListItemText primary="View Products" />
            </StyledListItemButton>
            <StyledListItemButton
              sx={{ p: 0.4, pl: 4 }}
              onClick={() => navigate("/products/add-product")}
            >
              <ListItemText primary="Add Product" />
            </StyledListItemButton>
          </List>
        </Collapse>
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
            <StyledListItemButton
              sx={{ p: 0.4, pl: 4 }}
              onClick={() => navigate("/suppliers")}
            >
              <ListItemText primary="View Suppliers" />
            </StyledListItemButton>
            <StyledListItemButton
              sx={{ p: 0.4, pl: 4 }}
              onClick={() => navigate("/suppliers/add-supplier")}
            >
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
