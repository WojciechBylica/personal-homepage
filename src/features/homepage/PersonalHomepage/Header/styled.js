import styled from "styled-components";
import { ReactComponent as Message } from "./Message.svg";

export const Wrapper = styled.article`
    display: flex;
    flex-direction: row;
    margin-bottom: 63px;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        flex-direction: column;
        margin-bottom: 48px;
    };
`;

export const StyledImage = styled.img`
    display:flex;
    width: 30vw;
    max-width: 384px;
    height: 30vw;
    max-height: 384px;
    flex-shrink: 2;
    border-radius: 100%;

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        width: 132px;
        height: 132px;
    };
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 66px;

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin: 0;
    };
`;

export const Introduction = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.textSecondary};

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin: 12.67px 0 8px;
    };
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.text};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        font-size: 22px;
    };
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.textSecondary};
    margin: 32px 0 35px;

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin: 16px 0 24px;
        font-size: 12px;
    };
`;

export const ButtonLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    position: relative;
    width: 154px;
    height: 49px;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid rgba(209, 213, 218, 0.3);
    background: ${({ theme }) => theme.color.linkButtonBg};
    color: ${({ theme }) => theme.color.white};

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    };

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        width: 138px;
         height: 46px;
    };
`;

export const StyledMessage = styled(Message)`
color: ${({ theme }) => theme.color.white};
`;