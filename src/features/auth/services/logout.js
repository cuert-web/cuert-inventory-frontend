import { redirect } from "react-router-dom";

export const logout = () => {
  // remove token from local storage
  localStorage.removeItem("token");
  // redirect to login
  return redirect("/login");
};
