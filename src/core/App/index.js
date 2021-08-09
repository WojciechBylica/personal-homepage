import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { themeDark, themeLight } from "./theme";
import { PersonalHomepage } from "../../features/homepage/PersonalHomepage";

export const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider
            theme={isDarkTheme ? themeDark : themeLight}
        >
            <Normalize />
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    );
};