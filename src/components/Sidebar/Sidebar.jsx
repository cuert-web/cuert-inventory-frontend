import { Avatar } from "@mui/material";
import {
  AvatarContainer,
  StyledAside,
  StyledList,
  StyledNavLink,
} from "./Sidebar.styled";
import avatar from "@/assets/avatar.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const Sidebar = () => {
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
          <StyledNavLink to="/suppliers">
            <InventoryRoundedIcon />
            <p>Suppliers</p>
          </StyledNavLink>
        </li>
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
