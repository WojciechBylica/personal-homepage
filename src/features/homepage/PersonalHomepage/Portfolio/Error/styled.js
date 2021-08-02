import styled from "styled-components";
import { ReactComponent as Danger } from "../../icons/danger.svg";

export const ErrorArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 426.53px;
    margin: 95.5px 0 140px;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin: 24px 0 48px;
    };
`;

export const Header = styled.h3`
    margin: 23.16px 0 32px;
    color: ${({ theme }) => theme.color.text};

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        font-size: 18px;
    };
`;

export const Paragraph = styled.p`
    margin: 0 0 32px;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.text};

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        font-size: 14px;
    };
`;

export const DangerIcon = styled(Danger)`
    color: ${({ theme }) => theme.color.text};
    width: 40px;
    height: 40px;     
`;