import { createSlice } from '@reduxjs/toolkit';
import { getInitialThemeDark } from './ThemeSwitcher/initialThemeDark';
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: getInitialThemeDark(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectIsDarkTheme = (state) => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;
