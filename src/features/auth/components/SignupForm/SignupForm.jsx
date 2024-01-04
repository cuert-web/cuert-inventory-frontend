import { Link } from "react-router-dom";
import person from "@/features/auth/assets/person.png";
import phone from "@/features/auth/assets/icons8-phone-30.png";
import email from "@/features/auth/assets/email.png";
import pass1 from "@/features/auth/assets/password.png";
import pass2 from "@/features/auth/assets/icons8-password-30.png";
import {
  CreateOrLogin,
  LoginBtn,
  StyledLoginForm,
} from "../LoginForm/LoginForm.styled";
const SignupForm = () => {
  return (
    <StyledLoginForm action="" className="form1">
      <div className="mb-3">
        <img src={person} />
        <label htmlFor="name">
          <strong> Name</strong>
        </label>
        <div className="box">
          <input type="text" name="Enter Name" />
        </div>
      </div>
      <div className="mb-3">
        <img src={phone} />
        <label htmlFor="name">
          <strong> Phone Number </strong>
        </label>
        <div className="box">
          <input type="text" name="Enter Name" />
        </div>
      </div>

      <div className="mb-3">
        <img src={email} />
        <label htmlFor="email">
          <strong> Email</strong>
        </label>
        <div className="box">
          <input type="email" name="Enter Email" />
        </div>
      </div>
      <div className="mb-3">
        <img src={pass1} />
        <label htmlFor="password">
          <strong>Password</strong>
        </label>
        <div className="box">
          <input type="password" name="Enter Password" />
        </div>
      </div>
      <div className="mb-3">
        <img src={pass2} />
        <label htmlFor="password">
          <strong>Confirm Password</strong>
        </label>
        <div className="box">
          <input type="password" name="Enter Password" />
        </div>
      </div>
      <LoginBtn>Sign up</LoginBtn>
      <CreateOrLogin>
        <p>Already have an account?</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light text-decoration-none"
        >
          Log in
        </Link>
      </CreateOrLogin>
    </StyledLoginForm>
  );
};

export default SignupForm;
