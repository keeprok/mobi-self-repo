import { useState } from 'react';

const MainPage = () => {
  const [errorCount, setErrorCount] = useState(null);
  return (
    <div>
      <h1>ErrorBoundary</h1>
    </div>
  );
};
export default MainPage;
