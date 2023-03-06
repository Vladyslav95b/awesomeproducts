/* eslint-disable react-hooks/rules-of-hooks */
import { useForm, SubmitHandler } from 'react-hook-form';
import { login } from '../../../api/requests/auth';
import { useAppThunkDispatch } from '../../../store';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Text } from '../../components/Text';
import style from './style.module.scss';

type SignInInputs = {
    email: string;
    password: string;
};

const SignIn = () => {
    const dispatch = useAppThunkDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInInputs>();
    const onSubmit: SubmitHandler<SignInInputs> = (data) => {
        dispatch(login(data));
    };
    return (
        <div className={style.form}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={style.form__container}
            >
                <Text type="headline1">Login</Text>
                <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    register={register}
                />
                {errors.email && <span>Error in email </span>}
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    register={register}
                />
                {errors.password && <span>Error in passowrd </span>}

                <Button buttonType="submit" type="primary" title="Confirm" />
            </form>
        </div>
    );
};
export default SignIn;
