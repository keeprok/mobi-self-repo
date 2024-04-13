import { styled } from 'styled-components';

import { getTodo } from '../../libs/axios/todo';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchTodo = async () => {
      setIsLoading(true);
      try {
        const response = await getTodo({ number: 1 });
        const results = response.data;
        const todos = Object.keys(results)
          .filter((key) => key !== 'pagination')
          .map((key) => results[key]);
        setTodoList(todos);
      } catch (error) {
        console.error('할 일 목록을 불러오는 데 실패했습니다', error.response?.data);
      }
      setIsLoading(false);
    };

    fetchTodo();
  }, []);

  // const deleteTodo = async (id) => {
  //   try {
  //     await deleteTodo({ todoId: id });
  //     setTodoList(todoList.filter((todo) => todo.id !== id));
  //   } catch (error) {
  //     console.error('할 일 삭제에 실패했습니다', error.response?.data);
  //   }
  // };
  const navigate = useNavigate();
  const navigateAddTodo = () => {
    navigate('/Todo/add');
  };
  return (
    <div>
      <h1>할일을 정리해보세요~</h1>
      {isLoading ? (
        <p>Loading...</p> // 로딩 인디케이터 표시
      ) : (
        todoList.map((todo, index) => (
          <TodoBox key={index}>
            <TodoHeader>
              <p>{todo.title}</p>
              <p>{index + 1}</p>
            </TodoHeader>
            <TodoContent>{todo.content}</TodoContent>
            <div>{todo.lastDay}</div>
            {/* <button onClick={() => deleteTodo(todo.id)}>삭제</button> */}
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
