import * as yup from 'yup';
import { EmailYup, PassWordYup } from '../../common/yupCondition';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../common/formInput';
import { postSignIn } from '../../libs/axios/user';
import { setSessionToken } from '../../libs/auth/storage-manager';
import { useMutation } from 'react-query';

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

  const { mutateAsync: signIn } = useMutation(postSignIn, {
    onSuccess: (data) => {
      console.log('축하합니다. 로그인에 성공하셨습니다', data);
      setSessionToken(data.data.token);
      navigate('/todo');
    },
    onError: (err) => {
      console.error('로그인에 실패하셨습니다', err.response.data);
    },
  });
  const onSubmitFnc = async (data) => {
    try {
      const userData = await signIn({ email: data.email, pw: data.passWord });
      console.log('로그인 성공', userData);
    } catch (error) {
      console.error('로그인 실패', error.response?.data);
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
