import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "@/features/auth/services/login";
import { setToken } from "../utils/auth";
// import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ identifier, password }) => loginApi(identifier, password),

    onSuccess: (data) => {
      console.log(data);
      setToken(data?.data?.access_token);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log("ERROR", error);
      // toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoggingIn };
}
