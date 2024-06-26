import { Link } from "react-router-dom";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { Person, Lock } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  CreateOrLogin,
  LabelContainer,
  LoginBtn,
  StyledLoginForm,
} from "./LoginForm.styled";
import InputField from "../InputField/InputField";

const validationSchema = Yup.object({
  identifier: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "at least 8 characters long")
    .required("Required"),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ identifier, password }) => {
      login({ identifier, password });
    },
  });
  const { login, isLoggingIn } = useLogin();

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit} className="login-form">
      <div className="mb-3">
        <LabelContainer>
          <Person />
          <label htmlFor="identifier">
            <strong>Identifier</strong>
          </label>
        </LabelContainer>
        <InputField
          onChange={formik.handleChange}
          value={formik.values.identifier}
          placeholder="Enter Email or Username or Phone Number"
          name="identifier"
          isError={
            formik.touched.identifier && Boolean(formik.errors.identifier)
          }
          errorMessage={formik.touched.identifier && formik.errors.identifier}
        />

      </div>
      <div className="mb-3">
        <LabelContainer>
          <Lock />
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
        </LabelContainer>
        <InputField
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Enter Password"
          name="password"
          isError={formik.touched.password && Boolean(formik.errors.password)}
          errorMessage={formik.touched.password && formik.errors.password}
        />

        {/* <div className="box">
          <StyledInput
            required
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter Password"
          />
        </div> */}
      </div>

      <LoginBtn disabled={isLoggingIn} type="submit">
        {isLoggingIn ? (
          <CircularProgress
            sx={{
              color: "white",
            }}
            size={20}
          />
        ) : (
          "Log in"
        )}
      </LoginBtn>
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
