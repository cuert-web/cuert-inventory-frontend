import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Email,
  Person,
  Person4,
  Phone,
  Lock,
  Password,
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import {
  CreateOrLogin,
  LabelContainer,
  LoginBtn,
  StyledLoginForm,
} from "../LoginForm/LoginForm.styled";
import { useSignup } from "@/features/auth/hooks/useSignup";

const userSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(11, "Phone number must be at least 11 characters")
    .required("Required"),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      // console.log(values);
      signup(values);
    },
  });

  const { signup, isSigningUp } = useSignup();

  return (
    <StyledLoginForm className="form1" onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <LabelContainer>
          <Person />
          <label htmlFor="name">
            <strong>Full Name</strong>
          </label>
        </LabelContainer>
        <div className="box">
          <input
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder="Enter Full Name"
            name="fullName"
          />
        </div>
      </div>
      <div className="mb-3">
        <LabelContainer>
          <Person4 />
          <label htmlFor="username">
            <strong>Username</strong>
          </label>
        </LabelContainer>
        <div className="box">
          <input
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Enter Username"
            name="username"
          />
        </div>
      </div>
      <div className="mb-3">
        <LabelContainer>
          <Phone />
          <label htmlFor="name">
            <strong> Phone Number </strong>
          </label>
        </LabelContainer>
        <div className="box">
          <input
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            placeholder="Enter Phone Number"
            name="phoneNumber"
          />
        </div>
      </div>

      <div className="mb-3">
        <LabelContainer>
          <Email />
          <label htmlFor="email">
            <strong> Email</strong>
          </label>
        </LabelContainer>
        <div className="box">
          <input
            type="email"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter Email"
            name="email"
          />
        </div>
      </div>
      <div className="mb-3">
        <LabelContainer>
          <Lock />
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
        </LabelContainer>
        <div className="box">
          <input
            type="password"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter Password"
            name="password"
          />
        </div>
      </div>
      <div className="mb-3">
        <LabelContainer>
          <Password />
          <label htmlFor="password">
            <strong>Confirm Password</strong>
          </label>
        </LabelContainer>
        <div className="box">
          <input
            type="password"
            required
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </div>
      </div>
      <LoginBtn type="submit" disabled={isSigningUp}>
        {isSigningUp ? (
          <CircularProgress size={20} sx={{ color: "white" }} />
        ) : (
          "Sign up"
        )}
      </LoginBtn>
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
