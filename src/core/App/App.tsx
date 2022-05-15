
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { themeLight,themeDark } from './theme';
import { useSelector } from 'react-redux';
import { selectIsDarkTheme } from '../../common/themeSlice';
import { PersonalHomepage } from '../../features/homepage/PersonalHomepage';

function App() {
const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <Normalize />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
