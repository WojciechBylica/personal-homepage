import { useSelector } from 'react-redux';
import Error from './Error';
import Loading from './Loading';
import Success from './Success';
import { selectStatus } from '../../personalHomepageSlice';

export const PortfolioContent = () => {
  const status = useSelector(selectStatus);

  switch (status) {
    case 'loading':
      return <Loading />;
    case 'error':
      return <Error />;
    case 'success':
      return <Success />;
    default:
      return <Error />;
  }
};
