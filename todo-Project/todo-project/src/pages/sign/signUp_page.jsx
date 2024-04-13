import FormInput from '../../common/formInput';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { EmailYup, PassWordYup } from '../../common/yupCondition';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postSignUp } from '../../libs/axios/user';
const SignUpPage = () => {
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
      const response = await postSignUp({ email: data.email, pw: data.passWord });
      console.log('축하합니다. 회원가입에 성공하셨습니다', response.data);
      navigate('/sign-in');
    } catch (error) {
      console.log('이미 존재하는 이메일입니다', error.response.data);
    }
  };

  return (
    <div>
      <div>회원가입 페이지 입니다 </div>
      <form onSubmit={handleSubmit(onSubmitFnc)}>
        <FormInput placeholder="email" register={register} name="email" errors={errors} />
        <FormInput placeholder="passWord" register={register} name="passWord" errors={errors} />
        <button type="submit" disabled={!isValid}>
          회원가입
        </button>
      </form>
    </div>
  );
};
export default SignUpPage;
