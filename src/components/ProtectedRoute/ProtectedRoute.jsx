import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getToken } from "@/features/auth";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return children;
};

export default ProtectedRoute;
