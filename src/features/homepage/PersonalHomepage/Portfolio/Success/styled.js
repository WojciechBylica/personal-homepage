import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 24px 0 120px;
    word-break: break-all;

    @media ( max-width: ${({ theme }) => theme.media.tabletMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
        margin: 24px 0 48px;
    };
`;

export const Article = styled.article`
    background: ${({ theme }) => theme.color.sectionBackground};
    border: 6px solid ${({ theme }) => theme.color.repoBorderColor};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.repoShadow2percent}, 
                0px 16px 58px ${({ theme }) => theme.color.repoShadow3percent};
    border-radius: 4px;
    max-width: 592px;
    border-radius: 4px;
    padding: 56px;
    
    &:hover{
        border: 6px solid ${({ theme }) => theme.color.repoHoverShadow};
    };

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        padding: 18px;
    };
`;

export const Header = styled.h4`
    color: ${({ theme }) => theme.color.repoHeader};
    margin: 0 0 24px;
    font-size: 16px;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin: 0 0 16px;
    };
`;

export const Description = styled.p`
   color: ${({ theme }) => theme.color.textSecondary};
    margin: 0 0 24px;
    font-size: 18px;
    text-align: justify;
    letter-spacing: 0.05em;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin: 0 0 16px;
        font-size: 14px;
        text-align: left;
    };
`;

export const Links = styled.p`
    color: ${({ theme }) => theme.color.textSecondary};
    margin: 0 0 24px;
    font-size: 18px;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin: 0 0 16px;
        font-size: 14px;
    };
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.repoLink};
`;