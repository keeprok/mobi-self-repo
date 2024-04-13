import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/layout';
import MainPage from '../pages/mainPage';
import SignUpPage from '../pages/sign/signUp_page';
import SignInPage from '../pages/sign/signIn_Page';

import TodoPage from '../pages/todo/todoPage';
import AddTodoPage from '../pages/todo/addTodoPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/todo',
        element: <TodoPage />,
      },
      {
        path: '/todo/add',
        element: <AddTodoPage />,
      },
    ],
  },
]);
export default router;
