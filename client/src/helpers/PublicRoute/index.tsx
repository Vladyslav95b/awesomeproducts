import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CLIENT_ROUTES from '../../routes/Routes';
import { RootState } from "../../store/index";

import { IPublic } from '../../types/HelpersTypes';

export function PublicRoute({ children }: IPublic) {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authReducer.isAuth,
  );
  console.log(isLoggedIn)

  if (isLoggedIn) {
    return <Navigate to={`/${CLIENT_ROUTES.POKEMON}`} replace={true} />;
  }
  return children;
}
