import LoginForm from "../../components/LoginForm/LoginForm";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { BigBox1} from "./Login.styled";

const Login = () => {
  return (
    <AuthLayout>
      <BigBox1>
        <LoginForm />
      </BigBox1>
    </AuthLayout>
  );
};

export default Login;
