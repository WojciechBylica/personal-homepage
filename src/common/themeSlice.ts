import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../core/store';
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

const selectThemeState = (state: RootState) => state.theme;

export const selectIsDarkTheme = (state: RootState) =>
  selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;
