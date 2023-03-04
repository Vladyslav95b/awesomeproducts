import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ClientRoutes } from "../../router/Routes";

interface IProtected {
  children: JSX.Element;
}

export function Protected({ children }: IProtected) {
  const isLoggedIn = useSelector((state: any) => state.auth.isAuth);

  if (!isLoggedIn) {
    return <Navigate to={ClientRoutes.signIn} replace />;
  }
  return children;
}
