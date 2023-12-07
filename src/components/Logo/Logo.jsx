import logo from "@/assets/logo.png";
import { LogoContainer } from "./Logo.styled";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
