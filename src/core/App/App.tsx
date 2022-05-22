import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { themeLight, themeDark } from './theme';
import { PersonalHomepage } from '../../features/homepage/PersonalHomepage';
import { useAppSelector } from '../../features/homepage/hooks';

function App() {
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <Normalize />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
