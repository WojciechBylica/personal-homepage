import {
  GitHubIcon,
  PortfolioArticle,
  PortfolioHeader,
  PortfolioSection,
  PortfolioSubHeader,
} from './styled';
import { fetchLoadingReposLoading } from '../../personalHomepageSlice';
import { useEffect } from 'react';
import { PortfolioContent } from './PortfolioContent';
import { useAppDispatch } from '../../hooks';

const Portfolio = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLoadingReposLoading());
  }, [dispatch]);

  return (
    <PortfolioSection>
      <PortfolioArticle>
        <GitHubIcon />
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioSubHeader>my recent projects</PortfolioSubHeader>
      </PortfolioArticle>
      <PortfolioContent />
    </PortfolioSection>
  );
};

export default Portfolio;
