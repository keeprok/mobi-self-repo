import { styled } from 'styled-components';

import { getTodo } from '../../libs/axios/todo';
import { useQuery } from 'react-query';

import { useNavigate } from 'react-router-dom';
const TodoPage = () => {
  const navigate = useNavigate();
  const { data: todoList, isLoading } = useQuery('todo', () => getTodo({ number: 1 }), {
    select: (data) => {
      const results = data.data;
      return Object.keys(results)
        .filter((key) => key !== 'pagination')
        .map((key) => results[key]);
    },
  });

  const navigateAddTodo = () => {
    navigate('/Todo/add');
  };
  return (
    <div>
      <h1>할일을 정리해보세요~</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todoList.map((todo, index) => (
          <TodoBox key={index}>
            <TodoHeader>
              <p>{todo.title}</p>
              <p>{index + 1}</p>
            </TodoHeader>
            <TodoContent>{todo.content}</TodoContent>
            <div>{todo.lastDay}</div>
          </TodoBox>
        ))
      )}
      <button onClick={navigateAddTodo}>addTodo</button>
    </div>
  );
};
export default TodoPage;
const TodoBox = styled.div`
  width: 400px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
`;
const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TodoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
