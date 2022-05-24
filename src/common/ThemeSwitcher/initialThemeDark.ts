export const getInitialThemeDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;
