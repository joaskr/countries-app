import { useAxios } from './axios';

const Middleware = (props) => {
  const { children } = props;
  useAxios();
  return <>{children}</>;
};

export default Middleware;
