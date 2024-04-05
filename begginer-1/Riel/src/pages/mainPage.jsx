import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import UserList from '../components/userList';
import { userListData } from '../libs/user/user';
import PageBtn from '../components/pageBtn';
import { UseHandleUrl } from '../../hooks/useHandleUrl';

function MainPage() {
  //   const [searchParams, setSearchParams] = useSearchParams();
  const [users] = useState(userListData);
  const { getUrlValue, setUrlValue } = UseHandleUrl();

  const currentPage = +getUrlValue('page');
  const perPage = +getUrlValue('perPage');
  useEffect(() => {
    setUrlValue('page', 1);
    setUrlValue('perPage', 20);
  }, []);
  //   const sortField = searchParams.get('sortField') || 'name';
  //   const sortOrder = searchParams.get('sortOrder') || 'asc';
  return (
    <div>
      {/* <SortOptions userPerPage={userPerPage} setSearchParams={setSearchParams} /> */}
      <UserList userData={users} setUrlValue={setUrlValue} currentPage={currentPage} perPage={perPage} />
      <PageBtn userData={users} setUrlValue={setUrlValue} currentPage={currentPage} perPage={perPage} />
    </div>
  );
}

export default MainPage;
