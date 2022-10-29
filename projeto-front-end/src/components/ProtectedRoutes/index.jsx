import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/User";
import LoadingPage from "../LoadingPage";

const ProtectedRoutes = () => {
  const { token, loading } = useContext(UserContext);

  if (loading) return <LoadingPage />;

  return token ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtectedRoutes;
