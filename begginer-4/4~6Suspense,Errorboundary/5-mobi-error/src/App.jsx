import './App.css';
import ErrorComponent from './component/ErrorComponent';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback(err) {
  if (err.error.status === 401) {
    console.log(err.error.status);
    console.log(err.error.message);
  }
  return <div>예기치 못한 에러가 발생하였습니다</div>;
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ErrorComponent />
    </ErrorBoundary>
  );
}

export default App;
