import { Text } from '../../components/Text';
import { useSelector, useDispatch } from 'react-redux';

import style from './style.module.scss';
import { RootState } from '../../../store';
import Button from '../../components/Button';
import {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
    getCartTotal,
} from '../../../store/slices/cartSlice';
import { useEffect } from 'react';

const Cart = () => {
    const dispatch = useDispatch();
    const {cart, totalPrice, totalQuantity} = useSelector((state: RootState) => state.cartReducer);

    useEffect(() => {
        dispatch(getCartTotal());
      }, [cart]);

    function handleMinusOne(id: number) {
        dispatch(decreaseItemQuantity(id))
    }

    function handlePlusOne(id: number) {
        console.log(id);
        
        dispatch(increaseItemQuantity(id))
    }

    function handleRemoveItem(id: number) {
        dispatch(removeItem(id));
    }

    return (
        <div className="container">
            <div className={style.cart}>
                <Text type="headline1" title="Cart" />
                <div className={style.cart__container}>
                    {cart.length > 0 ? (
                        <>
                            {cart.map((item) => (
                                <div className={style.cart__item}>
                                    <div className={style.cart__item__title}>
                                        Name: {item.name}
                                    </div>
                                    <div className={style.cart__item__quantity}>
                                        <Button
                                            type="cart-btn"
                                            title="-"
                                            onClick={() =>
                                                handleMinusOne(item.id)
                                            }
                                        />
                                        <div>{item.quantity}</div>{' '}
                                        <Button
                                            type="cart-btn"
                                            title="+"
                                            onClick={() =>
                                                handlePlusOne(item.id)
                                            }
                                        />
                                    </div>
                                    <div className={style.cart__item__clear}>
                                        <Button
                                            type="cart-btn"
                                            title="Remove item"
                                            onClick={() => handleRemoveItem(item.id)}
                                        />
                                    </div>
                                    <div className={style.cart__item__price}>
                                        Price: {item.price * item.quantity}
                                    </div>
                                </div>
                            ))}
                            <div>Total Quantity: {totalQuantity}</div>

                            <div>Total Price: {totalPrice}</div>
                        </>
                    ) : (
                        <p>Cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
