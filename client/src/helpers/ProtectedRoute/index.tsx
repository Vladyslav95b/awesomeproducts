import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CLIENT_ROUTES from '../../routes/Routes';
import { RootState } from "../../store";

import { IProtected } from '../../types/HelpersTypes';

function ProtectedRoute({ children }: IProtected) {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isAuth,
  ) || false;

  if (!isLoggedIn) {
    return <Navigate to={`/${CLIENT_ROUTES.SING_IN}`} replace />;
  }
  return children;
}

export default ProtectedRoute;
