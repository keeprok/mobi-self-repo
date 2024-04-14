import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
