import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
};

*, ::after, ::before {
  box-sizing: inherit;
};

body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.color.background};
    margin: 0 auto;
    transition: transform 0.3s;
};

#root {
    margin: 5% auto;
    max-width: 1216px;
    display: flex;
    justify-content: center;
    flex-direction: column;
};
`;