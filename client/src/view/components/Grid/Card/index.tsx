import { FC } from 'react'

import style from './style.module.scss';
import { CardProps } from '../../../../types/GridCardPropTypes';
import { Text } from '../../Text';
import mockImage from '../../../../assets/images/pokeBall.png'
import { useNavigate } from 'react-router-dom';
import CLIENT_ROUTES from '../../../../routes/Routes';

const Card: FC<CardProps> = ({id,name,element_type, hp, attack, defense, stamina,generation, price }) => {
   const navigate = useNavigate();
    const handleCardClick = () => navigate(`/${CLIENT_ROUTES.POKEMON}/${id}`)
    
    return (
        <div className={style.card} onClick={handleCardClick}>
            <div className={style.card__title}><Text type='headline3'>{name}</Text></div>
            <div className={style.card__image}><img src={mockImage} alt='img'/></div>
            <div className={style.card__stats}>
                Basic Info:
                <ul>
                    <li>Element: {element_type}</li>
                    <li>HP: {hp}</li>
                    <li>Attack: {attack}</li>
                    <li>Defense: {defense}</li>
                    <li>Stamina: {stamina}</li>
                    <li>Generation: {generation}</li>
                </ul>
            </div>
            <div className={style.card__price}>Price: {price}</div>
        </div>
    )
}

export default Card;