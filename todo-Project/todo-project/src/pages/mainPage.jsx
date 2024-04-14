import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const navigate = useNavigate();
  const navigateSingIn = () => {
    navigate('/sign-in');
  };
  return (
    <div>
      <h1>당신의 todoLis 를 관리 해보세요~</h1>
      <button onClick={navigateSingIn}>시작하기 </button>
    </div>
  );
};

export default MainPage;
//formInput 도 모르는듯 검색하고 여기에 작성할예정 ...
