import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { signup as signupApi } from "@/features/auth/services/signup";
// import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: ({ fullName, username, phoneNumber, email, password }) =>
      signupApi(fullName, username, email, phoneNumber, password),

    onSuccess: (data) => {
      console.log(data);
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      console.log("ERROR", error);
      // toast.error("Provided email or password is incorrect");
    },
  });

  return { signup, isSigningUp };
}
