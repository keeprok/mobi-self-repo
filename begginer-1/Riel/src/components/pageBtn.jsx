import styled from 'styled-components';

const PageBtn = (userData, setUrlValue, perPage, currentPage) => {
  const pageBtnList = [];
  let firstPageBtn;
  let lastPageBtn;

  const totalPages = Math.ceil(userData.length / perPage);
  if (currentPage >= totalPages - 1) {
    firstPageBtn = Math.max(1, totalPages - 4);
  } else {
    firstPageBtn = Math.max(1, currentPage - 2);
  }

  if (currentPage <= 2) {
    lastPageBtn = Math.min(5, totalPages);
  } else {
    lastPageBtn = Math.min(currentPage + 2, totalPages);
  }

  //   for (let i = firstPageBtn; i <= lastPageBtn; i++) {
  //     pageBtnList.push(i);
  //   }
  for (let i = firstPageBtn; i <= lastPageBtn; i++) {
    pageBtnList.push(
      <S.btnList key={i} onClick={changePage(i)} isSelected={i === currentPage}>
        {i}
      </S.btnList>
    );
  }
  // const BtnArray = Array.from({length:5},(elemen,idx)=>{

  // })
  const changePage = (page) => () => {
    setUrlValue('page', page);
  };

  function isPrevBtnDisabled(currentPage) {
    return currentPage <= 1;
  }

  function isNextBtnDisabled(currentPage) {
    return currentPage >= totalPages;
  }

  return (
    <S.pageButtonWrapper>
      <button onClick={changePage(1)} disabled={isPrevBtnDisabled(currentPage)}>
        PrevPrev
      </button>

      <button onClick={changePage(currentPage - 1)} disabled={isPrevBtnDisabled(currentPage)}>
        Prev
      </button>

      {pageBtnList.map((page, index) => (
        <S.btnList key={index} onClick={changePage(page)} isSelected={page === currentPage}>
          {page}
        </S.btnList>
      ))}

      <button onClick={changePage(currentPage + 1)} disabled={isNextBtnDisabled(currentPage)}>
        Next
      </button>
      <button onClick={changePage(totalPages)} disabled={isNextBtnDisabled(currentPage)}>
        NextNext
      </button>
    </S.pageButtonWrapper>
  );
};
export default PageBtn;

const pageButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const btnList = styled.button`
  color: ${(props) => (props.isSelected ? 'blue' : 'black')};
  border-style: none;
`;

const S = { pageButtonWrapper, btnList };
