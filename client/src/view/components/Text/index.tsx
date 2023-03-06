import React, { FC } from 'react';

import cx from 'classnames';

import { TextPropTypes } from '../../../types/TextPropTypes'

import styles from './style.module.scss';

const classNameList:{[k in keyof TextPropTypes['type']]: string} = {
    headline1:                     'Headline1',
    headline2:                     'Headline2',
    headline3:                     'Headline3',
    headline4:                     'Headline4',
    'button-text':                 'Button-Text',
    default: 'Text',
};

const ComponentList =  {
    headline1: 'h1',
    headline2: 'h2',
    headline3: 'h3',
    headline4: 'h4',
    default:   'p',
};

export const Text: FC<TextPropTypes> = ({
    type = 'default',
    children,
    color,
    className,
    ...props
}) => {
    const Component: any = ComponentList[ type as keyof TextPropTypes['type'] ] || 'p';

    return (
        <Component
            className = { cx(styles[ classNameList[ type  as keyof TextPropTypes['type'] ] ], className) }
            { ...props }
            style = {{
                ...props.style,
                color,
            }}>
            {children}
        </Component>
    );
};
