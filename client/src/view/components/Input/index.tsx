import { InputProp } from '../../../types/InputPropTypes';

import style from './style.module.scss'

export const Input = ({
    type,
    name,
    placeholder,
    register,
    required,
  }: InputProp) => {
    return (
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        {...register(`${name}`, {
          required: required,
        })}
      />
    );
  };

export default Input;