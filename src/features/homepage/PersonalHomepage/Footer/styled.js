import styled from "styled-components";
import { ReactComponent as GitHub } from "../icons/gitHub.svg";

export const FooterIntroduction = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const FooterLink = styled.a`
    font-size:32px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.text};
    margin-top: 24px;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.color.emailHover}
    };

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        font-size: 18px;
        margin-top: 12px;
    };
`;

export const FooterDescription = styled.article`
    color: ${({ theme }) => theme.color.text};
    font-size: 18px;
    max-width: 670px;
    margin: 24px 0 56px;
    line-height: 140%;

    @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
        font-size: 14px;
        margin: 12px 0 40px;
    };
`;

export const GitHubIcon = styled(GitHub)`
    color: ${({ theme }) => theme.color.text};

    &:focus {
        color: ${({ theme }) => theme.color.iconFocus}
    };

    &:hover {
        color: ${({ theme }) => theme.color.emailHover}
    };
`;