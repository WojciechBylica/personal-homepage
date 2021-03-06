import styled from 'styled-components';

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  position: relative;
  border-radius: 4px;
  font-weight: 600;
  font-size: 20.0584px;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: 1px solid rgba(209, 213, 218, 0.3);
  background: ${({ theme }) => theme.color.linkButtonBg};
  color: ${({ theme }) => theme.color.linkButtonColor};
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
    font-size: 18px;
  } ;
`;
