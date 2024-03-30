const ErrorComponent = () => {
  const err = new Error();
  err.message = '인증되지 않은 회원입니다';
  err.status = 400;
  throw err;
};
export default ErrorComponent;
