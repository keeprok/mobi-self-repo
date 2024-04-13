import { axiosInstance } from './axiosInstance';

export const postTodo = async ({ title, content }) => {
  const response = await axiosInstance.post(
    '/todo',
    {
      title,
      content,
    }
    // { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
  );
  return response;
};
export const getTodo = async ({ number }) => {
  const response = await axiosInstance.get(
    `/todo?page=${number}`
    // {},
    // { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
  );
  return response;
};
export const patchTodo = async ({ title, content, state, todoId }) => {
  const response = await axiosInstance.patch(
    `/todo?todoId=${todoId}`,
    {
      title,
      content,
      state,
    }
    // { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
  );
  return response;
};
export const deleteTodo = async ({ todoId }) => {
  const response = await axiosInstance.delete(
    `/todo/${todoId}`,
    {}
    // { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
  );
  return response;
};
