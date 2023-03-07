import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { https } from '../../../api';
import { Text } from '../../components/Text';
import mockImage from '../../../assets/images/pokeBall.png';

import style from './style.module.scss';
import { CardProps } from '../../../types/GridCardPropTypes';
import Button from '../../components/Button';
import { addToCart } from '../../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

const PokemonDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState<CardProps>();
    const dispatch = useDispatch();

    useEffect(() => {
        https(`/api/pokemon/${id}`).then((res) => setData(res.data));
    }, [id]);
     function handleAddToCard() {
        dispatch(addToCart(data))
     }
    if (data) {
        return (
            <div className="container">
                <div className={style.pokemon}>
                    <div className={style.pokemon__title}>
                        <Text type="headline3">{data.name}</Text>
                    </div>
                    <div className={style.pokemon__image}>
                        <img src={mockImage} alt='img'/>
                    </div>
                    <div className={style.pokemon__stats}>
                        Basic Info:
                        <ul>
                            <li>Element: {data.element_type}</li>
                            <li>HP: {data.hp}</li>
                            <li>Attack: {data.attack}</li>
                            <li>Defense: {data.defense}</li>
                            <li>Stamina: {data.stamina}</li>
                            <li>Generation: {data.generation}</li>
                        </ul>
                    </div>
                    <div className={style.pokemon__price}>
                        Price: {data.price}
                    </div>
                    <div>
                        <Button type="primary" title="Add to cart" onClick={handleAddToCard}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return <>Error</>;
    }
};

export default PokemonDetails;
