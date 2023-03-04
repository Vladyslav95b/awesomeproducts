import { Routes, Route } from "react-router-dom";

import Layout from './Layout';

import { Protected } from "../helpers/ProtectedRoute";
import { Public } from "../helpers/PublicRoute";

import { ClientRoutes } from "./Routes";
import Login from '@components/Login';

export function AppRouter() {
  return (
      <Routes>
        <Route path={ClientRoutes.main} element={<Layout />}>
          <Route
            path={ClientRoutes.signIn}
            element={
              <Public>
                <Login />
              </Public>
            }
          />
        {/* <Route
          path={ClientRoutes.registration}
          element={
            <Public>
              <Registration />
            </Public>
          }
        /> */}
        {/* <Route path={ClientRoutes.other} element={<Main />} /> */}
      </Route>
    </Routes>
  );
}
