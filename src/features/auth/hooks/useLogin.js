import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "@/features/auth/services/login";
// import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ identifier, password }) =>
      loginApi(identifier, password ),

    onSuccess: (data) => {
      // queryClient.setQueryData(["user"], user.user);
      console.log(data);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log("ERROR", error);
      // toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoggingIn };
}
