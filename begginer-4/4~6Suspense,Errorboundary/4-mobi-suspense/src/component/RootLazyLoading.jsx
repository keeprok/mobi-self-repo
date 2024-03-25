import { createDelayedPromise } from "../utils/delay-helper";
import { promiseWrapper } from "../utils/promise-wrapper";
import SpittingLazyLoading from "./SplittingLazyLoading";

const fetchingData = promiseWrapper(createDelayedPromise("hello", 3000));

const RootLazyLoading = () => {
  const data = fetchingData.read();

  return (
    <div>
      {data}
      <SpittingLazyLoading />
    </div>
  );
};
export default RootLazyLoading;
