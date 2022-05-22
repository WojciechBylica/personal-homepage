export const getInitialThemeDark = () => {
  const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return isOsDark;
};
