import Error from './Error';
import Loading from './Loading';
import Success from './Success';
import { useAppSelector } from '../../hooks';

export const PortfolioContent = () => {
  const status = useAppSelector((state) => state.personalHomepage.status);

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
