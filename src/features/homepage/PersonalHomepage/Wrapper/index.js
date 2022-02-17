import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5% auto;
  max-width: 1216px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.media.mobileMax}px) {
    padding: 0 8px;
  } ;
`;
