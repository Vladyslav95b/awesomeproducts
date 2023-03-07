import React, { FC, ReactNode, MouseEvent } from 'react';
import { TextPropTypes } from '../../../types/TextPropTypes';
import { Text } from '../Text';
import styles from './style.module.scss';

export interface ButtonPropTypes {
    buttonType?: 'submit' | 'reset' | 'button';
    title?: string;
    type: 'auth' | 'primary' | 'secondary' | 'cart-btn';
    disabled?: boolean;
    loading?: boolean;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
    textType?:TextPropTypes['type'];
    className?: string;
    backgroundColor?: 'yellow' | 'white';
}

const Button: FC<ButtonPropTypes> = ({
    type,
    textType,
    disabled,
    loading,
    onClick,
    title,
    children,
    backgroundColor,
    className,
    buttonType,
    ...props }) => {
    return (
        <button
            { ...props }
            className = { `
            ${styles[ type ]}
            ${className}
            ${ backgroundColor && styles[ backgroundColor ]}` }
            disabled = { disabled || loading }
            type = { buttonType }
            onClick = { onClick }>
            {loading ? (
                <>
                    {loading ? 'here will be loading soon' : ''}
                </>
            ) : children || (
                <Text type = { textType }>{ title }</Text>
            )}
        </button>
    );
};

export default Button;
