import 'styled-components';

interface IScreenWidth {
  mobileMax: number;
  tabletMax: number;
}

interface IColors {
  background: string;
  text: string;
  textSecondary: string;
  linkButtonBg: string;
  linkButtonColor: string;
  buttonBackground: string;
  buttonBorder: string;
  buttonToggle: string;
  buttonIcon: string;
  sectionBackground: string;
  sectionHeaderBorder: string;
  bulletColor: string;
  emailHover: string;
  iconFocus: string;
  iconPortfolio: string;
  circleLoader: string;
  elipseLoader: string;
  repoBorderColor: string;
  repoShadow2percent: string;
  repoShadow3percent: string;
  repoHoverShadow: string;
  repoHeader: string;
  repoLink: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    media: IScreenWidth;
    color: IColors;
  }
}
