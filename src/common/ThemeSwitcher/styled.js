import styled, { css } from "styled-components";
import { ReactComponent as sunIcon } from "./sunIcon.svg";

export const StyledSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
    border: none;
    background: inherit;
    position: absolute;
    height: 26px;
    width: 159px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
`;

export const StyledText = styled.span`
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.textSecondary};
    padding: 5px 0;
    line-height: 15.6px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    flex-grow: 0;
    transition: transform 0.3s;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        display: none;
    };
`;

export const StyledSpan = styled.span`
    width: 47.06px;
    height: 25.07px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.color.buttonBorder};
    background-color: ${({ theme }) => theme.color.buttonBackground};
    margin: 0 0 0 12px;
    display: flex;
    align-items: center;
    padding: 3px;
    transition: transform 0.3s;
`;

export const IconWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: transform 0.3s;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.color.buttonToggle};

    ${({ moveToRight}) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(sunIcon)`
   color: ${({ theme }) => theme.color.buttonIcon};
`;