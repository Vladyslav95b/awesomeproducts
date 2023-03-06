import { FC } from 'react';
import { CardProps } from '../../../types/GridCardPropTypes';
import Card from './Card';
import style from './style.module.scss';

type GridProps = {
    data: CardProps[];
};

const Grid: FC<GridProps> = ({ data }) => {
    console.log(data);
    return (
        <div className={style.grid}>
            {data.map((item: CardProps) => (
                <Card {...item} />
            ))}
        </div>
    );
};

export default Grid;
