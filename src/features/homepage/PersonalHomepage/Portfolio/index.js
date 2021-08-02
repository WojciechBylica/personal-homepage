import Error from "./Error";
import { GitHubIcon, PortfolioArticle, PortfolioHeader, PortfolioSection, PortfolioSubHeader } from "./styled";

const Portfolio = () => {

    return (
        <PortfolioSection>
            <PortfolioArticle>
                <GitHubIcon />
                <PortfolioHeader>Portfolio</PortfolioHeader>
                <PortfolioSubHeader>my recent projects</PortfolioSubHeader>
            </PortfolioArticle>
            {/* <PortfolioArticle> */}
                <Error />
            {/* </PortfolioArticle> */}
        </PortfolioSection>
    );
};

export default Portfolio;