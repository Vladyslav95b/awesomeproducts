import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CLIENT_ROUTES from '../../../routes/Routes';
import { RootState } from '../../../store';
import { signOut } from '../../../store/slices/authSlice';

import Button from '../Button';
import style from './style.module.scss';

const Header = () => {
    const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = useCallback(() => {
        navigate(CLIENT_ROUTES.SING_IN);
    }, [navigate]);

    const handleSignUp = useCallback(() => {
        navigate(CLIENT_ROUTES.SING_UP);
    }, [navigate]);

    const handlePokemons = useCallback(() => {
        navigate(CLIENT_ROUTES.POKEMON);
    }, [navigate]);

    const handleCart = useCallback(() => {
        navigate(CLIENT_ROUTES.CART);
    }, [navigate]);

    const handleProfile = useCallback(() => {
        navigate(CLIENT_ROUTES.PROFILE);
    }, [navigate]);
    const handleSignOut = () => {
        dispatch(signOut());
    };

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header__actions}>
                    {isAuth ? (
                        <>
                            <Button
                                type="auth"
                                textType="button-text"
                                title="Pokemons"
                                onClick={handlePokemons}
                            />
                            <Button
                                type="auth"
                                textType="button-text"
                                title="Cart"
                                onClick={handleCart}
                            />
                            <Button
                                type="auth"
                                textType="button-text"
                                title="Profile"
                                onClick={handleProfile}
                            />
                            <Button
                                type="auth"
                                textType="button-text"
                                title="Sign Out"
                                onClick={handleSignOut}
                            />
                        </>
                    ) : (
                        <>
                            <Button
                                type="auth"
                                textType="button-text"
                                title="Sign In"
                                onClick={handleSignIn}
                            />
                            <Button
                                type="auth"
                                textType="button-text"
                                title="Sign Up"
                                onClick={handleSignUp}
                            />
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
export default Header;
