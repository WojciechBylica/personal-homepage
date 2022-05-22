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

export default themeSlice.reducer;
