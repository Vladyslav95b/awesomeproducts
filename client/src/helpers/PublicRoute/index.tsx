import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { ClientRoutes } from "../../router/Routes";

interface IPublic {
  children: JSX.Element;
}

export function Public({ children }: IPublic) {
  const isLoggedIn = useSelector((state: any) => state.auth.isAuth);
  if (isLoggedIn) {
    return <Navigate to={ClientRoutes.main} replace />;
  }
  return children;
}
