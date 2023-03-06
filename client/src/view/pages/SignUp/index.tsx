import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { http } from '../../../api';
import CLIENT_ROUTES from '../../../routes/Routes';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Text } from '../../components/Text';
import style from "./style.module.scss"


type SignUpInputs = {
    username: string,
    email: string,
    password: string
};


const SignUp = () =>{
    const navigate = useNavigate()
    const [signUpError, setSignUpError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpInputs>();
  const onSubmit: SubmitHandler<SignUpInputs> = data => {
        http.put('/api/auth/signup', data).then( _ => navigate(`/${CLIENT_ROUTES.SING_IN}`)).catch(e => setSignUpError(e.message || 'Something went wrong'))
  };

    return (
    <div className={style.form}>

        <form onSubmit={handleSubmit(onSubmit)} className={style.form__container}>
            <Text type = 'headline1'>Registration</Text>
            <Input type='text' name='email' placeholder='Email' register={register}/>
            {errors.email && <span>Error in email </span>}
            <Input type='text' name='username' placeholder='Username' register={register}/>
            {errors.username && <span>Error in username </span>}
            <Input type='password' name='password' placeholder='Password' register={register}/>
            {errors.password && <span>Error in passowrd </span>}

        <Button buttonType='submit' type='primary' title='Confirm'  />
        {signUpError && <span>{signUpError}</span>}
        </form>

    </div>
    )
}
export default SignUp