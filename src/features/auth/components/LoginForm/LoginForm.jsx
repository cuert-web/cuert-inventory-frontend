import email from "@/features/auth/assets/email.png";
import pass from "@/features/auth/assets/password.png";
import { Link } from "react-router-dom";
import { CreateOrLogin, LoginBtn, StyledLoginForm } from "./LoginForm.styled";

const LoginForm = () => {
  return (
    <StyledLoginForm action="">
      <div className="mb-3">
        <img src={email} alt="" />
        <label htmlFor="email">
          <strong> Email</strong>
        </label>
        <div className="box">
          <input type="email" />
        </div>
      </div>
      <div className="mb-3">
        <img src={pass} alt="" />
        <label htmlFor="password">
          <strong>Password</strong>
        </label>
        <div className="box">
          <input type="password" name="Enter Password" />
        </div>
      </div>

      <LoginBtn>Log in</LoginBtn>
      <CreateOrLogin>
        <p>Don&apos;t you have an account? </p>
        <Link
          to="/signup"
          className="btn btn-default border w-100 bg-light text-decoration-none"
        >
          Sign Up
        </Link>
      </CreateOrLogin>
    </StyledLoginForm>
  );
};

export default LoginForm;
