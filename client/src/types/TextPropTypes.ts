import { HTMLProps } from 'react';

export interface TextPropTypes
    extends HTMLProps<HTMLParagraphElement | HTMLHeadingElement> {
    type?:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'button-text'

    className?: string;
    color?: string;
}

