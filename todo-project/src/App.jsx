import './App.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from './common/formInput';

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver() });

  return (
    <div>
      <h1>당신의 todoList 입니다 </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <FormInput placeholder="email" register={register} name="email" errors={errors} />
        </div>
      </form>
    </div>
  );
}

export default App;
//form input 도 모르는듯 검색하고 여기에 작성할예정 ...
