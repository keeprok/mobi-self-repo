import * as yup from 'yup';
import { EmailYup, PassWordYup } from '../../common/yupCondition';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../common/formInput';
import { postSignIn } from '../../libs/axios/user';
import { setSessionToken } from '../../libs/auth/storage-manager';

const SignInPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: EmailYup,
    passWord: PassWordYup,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmitFnc = async (data) => {
    try {
      const response = await postSignIn({ email: data.email, pw: data.passWord });
      console.log('로그인 성공', response.data);
      setSessionToken(response.data.token);
      navigate('/todo');
    } catch (error) {
      console.log('가입되지 않은 회원입니다 ', error.response.data);
    }
  };

  const navigateSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <div>
      <h1>당신의 todoList 입니다 </h1>
      <form onSubmit={handleSubmit(onSubmitFnc)}>
        <div>
          <FormInput placeholder="email" register={register} name="email" errors={errors} />
          {/* <input placeholder="email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>} */}
          <FormInput placeholder="passWord" register={register} name="passWord" errors={errors} />
          <button type="submit" disabled={!isValid}>
            로그인
          </button>
        </div>
        <button onClick={navigateSignUp}>화원가입</button>
      </form>
    </div>
  );
};

export default SignInPage;
