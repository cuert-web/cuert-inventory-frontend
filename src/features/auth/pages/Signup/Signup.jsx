import SignupForm from "../../components/SignupForm/SignupForm";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { BigBox1 } from "../Login/Login.styled";

const Signup = () => {
  return (
    <AuthLayout>
      <BigBox1>
        <SignupForm />
      </BigBox1>
    </AuthLayout>
  );
};

export default Signup;
