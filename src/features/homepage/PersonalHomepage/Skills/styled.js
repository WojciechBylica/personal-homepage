import styled from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg"

export const Section = styled.section`
    background: ${({ theme }) => theme.color.sectionBackground};
    margin-bottom: 72px;
    
    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin-bottom: 50px;
    }
`;

export const Header = styled.h2`
    margin: 32px;
    font-size: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.color.sectionHeaderBorder};
    color: ${({ theme }) => theme.color.text};

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        font-size: 18px;
        margin: 16px;
        padding-bottom: 12px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 32px;
    padding-left: 0;

    @media ( max-width: ${({ theme }) => theme.media.tabletMax}px) {
        grid-template-columns: 1fr 1fr;
    }

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        grid-template-columns: 1fr; 
        margin: 12px 16px 16px;
    }
`;

export const Item = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-grow: 0;
    font-size: 18px;
    margin: 8px 0;
    color: ${({ theme }) => theme.color.textSecondary};

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
       font-size: 14px;
       margin: 8px 0;
    }
`;

export const Bullet = styled(BulletIcon)`
    color: ${({ theme }) => theme.color.bulletColor};;
    margin-right: 16px;
    width: 9px;
    height: 9px;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin-right: 8px;
        width: 6px;
        height: 6px;
    }
`;