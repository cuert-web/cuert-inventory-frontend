import { ListItemButton, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledAside = styled("aside")`
  background-color: #00412a;
  color: #fff;
  padding: 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid #ccc;
  gap: 1rem;

  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
`;

export const AvatarContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const StyledList = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  font-size: 1.4rem;
  align-items: center;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;

  &.active,
  &:hover {
    background-color: rgba(0, 255, 172, 0.14);
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const StyledListItem = styled("div")`
  display: flex;
  gap: 8px;
  font-size: 1.4rem;
  align-items: center;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  justify-content: space-between;

  &.active,
  &:hover {
    background-color: rgba(0, 255, 172, 0.14);
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const IconDiv = styled("div")`
  display: flex;
`;

export const StyledListItemButton = styled(ListItemButton)`
  padding: 0.3rem 0.3rem;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 255, 172, 0.14);
  }
`;
