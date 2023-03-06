import { Routes, Route } from 'react-router-dom';

import SignIn from '../view/pages/SignIn';
import SignUp from '../view/pages/SignUp';

import ProtectedRoute from '../helpers/ProtectedRoute';
import { PublicRoute } from '../helpers/PublicRoute';

import CLIENT_ROUTES from './Routes';
import Layout from '../view/components/Layout';
import Pokemon from '../view/pages/Pokemons';
import PokemonDetails from '../view/pages/PokemonDetails';
import Profile from '../view/pages/Profile';

export function AppRouter() {
    return (
        <Routes>
            <Route path={CLIENT_ROUTES.MAIN} element={<Layout />}>
           
                <Route
                    path={CLIENT_ROUTES.SING_IN}
                    element={
                        <PublicRoute>
                            <SignIn />
                        </PublicRoute>
                    }
                />
                <Route
                    path={CLIENT_ROUTES.SING_UP}
                    element={
                        <PublicRoute>
                            <SignUp />
                        </PublicRoute>
                    }
                />
                <Route
                    path={CLIENT_ROUTES.PROFILE}
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={CLIENT_ROUTES.POKEMON}
                    element={
                        <ProtectedRoute>
                            <Pokemon />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={CLIENT_ROUTES.POKEMON_DETAILS}
                    element={
                        <ProtectedRoute>
                            <PokemonDetails />
                        </ProtectedRoute>
                    }
                />
                <Route path={CLIENT_ROUTES.OTHER} element={<>Error</>} />
            </Route>
        </Routes>
    );
}
