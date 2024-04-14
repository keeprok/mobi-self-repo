import * as yup from 'yup';
import { styled } from 'styled-components';
import { postTodo } from '../../libs/axios/todo';
import { ContentYup, TitleYup } from '../../common/yupCondition';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../common/formInput';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
const AddTodoPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: TitleYup,
    content: ContentYup,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) });

  const { mutateAsync: addTodo } = useMutation(postTodo, {
    onSuccess: (data) => {
      console.log('할 일 추가 성공', data);
      navigate('/Todo');
    },
    onError: (error) => {
      console.error('할 일 추가 실패', error.response?.data);
    },
  });
  const onSubmitAddTodo = async (data) => {
    await addTodo(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitAddTodo)}>
        <TodoBox>
          <FormInput placeholder="title" register={register} name="title" errors={errors} />
          <FormInput placeholder="content" register={register} name="content" errors={errors} />
          <button type="submit">추가</button>
        </TodoBox>
      </form>
    </div>
  );
};
export default AddTodoPage;
const TodoBox = styled.div`
  width: 400px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
`;
