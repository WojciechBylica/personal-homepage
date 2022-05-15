import styled from 'styled-components';
import { ReactComponent as Message } from './Message.svg';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 63px;

  @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
    flex-direction: column;
    margin-bottom: 48px;
  } ;
`;

export const StyledImage = styled.img`
  display: flex;
  width: 30vw;
  max-width: 384px;
  height: 30vw;
  max-height: 384px;
  flex-shrink: 2;
  border-radius: 100%;

  @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
    width: 132px;
    height: 132px;
  } ;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 66px;

  @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
    margin: 0;
  } ;
`;

export const Introduction = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textSecondary};
  transition: transform 0.3s;

  @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
    margin: 12.67px 0 8px;
  } ;
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.text};
  margin: 0;
  transition: transform 0.3s;

  @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
    font-size: 22px;
  } ;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.textSecondary};
  margin: 32px 0 35px;
  transition: transform 0.3s;

  @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
    margin: 16px 0 24px;
    font-size: 12px;
  } ;
`;

export const StyledMessage = styled(Message)`
  margin-right: 18.77px;
  width: 19.23px;
  height: 17.12px;
  transition: transform 0.3s;
`;
