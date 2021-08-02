import Error from "./Error";
import Loading from "./Loading";
import { GitHubIcon, PortfolioArticle, PortfolioHeader, PortfolioSection, PortfolioSubHeader } from "./styled";

const Portfolio = () => {

    return (
        <PortfolioSection>
            <PortfolioArticle>
                <GitHubIcon />
                <PortfolioHeader>Portfolio</PortfolioHeader>
                <PortfolioSubHeader>my recent projects</PortfolioSubHeader>
            </PortfolioArticle>

            {/* <Error /> */}
            <Loading />

        </PortfolioSection>
    );
};

export default Portfolio;