import styled from "styled-components";
import { ReactComponent as GitHub } from "../icons/gitHub.svg";

export const PortfolioSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PortfolioArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PortfolioHeader = styled.h2`
    color: ${({ theme }) => theme.color.text};
    font-size: 30px;
    margin: 12.99px 0 8px;
    transition: transform 0.3s;

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        font-size: 14px;
        margin: 12.79px 0 16px;
    };
`;

export const PortfolioSubHeader = styled.p`
    color: ${({ theme }) => theme.color.text};
    font-size: 20px;
    margin: 0;
    transition: transform 0.3s;

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        font-size: 14px;
    };
`;

export const GitHubIcon = styled(GitHub)`
    color: ${({ theme }) => theme.color.iconPortfolio};
    width: 40px;
    height: 40px;
    transition: transform 0.3s;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        width: 32px;
        height: 32px;
    };
`;

