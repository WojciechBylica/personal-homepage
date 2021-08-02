import styled from "styled-components";

export const ButtonLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    position: relative;
    /* width: 154px;
    height: 49px; */
    border-radius: 4px;
    font-weight: 600;
    font-size: 20.0584px;
    letter-spacing: 0.05em;
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
        /* width: 138px;
        height: 46px; */
        font-size: 18px;
    };
`;