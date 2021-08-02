const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    lightGrey: "#E5E5E5",
    iron: "#d1d5da4d",
    semiGrey: "#d1d5da1a",
    slateGrey: "#6E7E91",
    mineShaft: "#252525",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    semiDark: "#363636b8",
};

const common = {
    media: {
        mobileMax: 767,
        tabletMax: 991,
    },
};

export const themeLight = {
    ...common,
    color: {
        background: colorNames.lightGrey,
        text: colorNames.mineShaft,
        textSecondary: colorNames.slateGrey,
        linkButtonBg: colorNames.scienceBlue,
        buttonBackground: colorNames.lightGrey,
        buttonBorder: colorNames.slateGrey,
        buttonToggle: colorNames.slateGrey,
        buttonIcon: colorNames.white,
        sectionBackground: colorNames.white,
        sectionHeaderBorder: colorNames.iron,
        bulletColor: colorNames.scienceBlue,
        emailHover: colorNames.scienceBlue,
        iconFocus: colorNames.scienceBlue,
        iconPortfolio: colorNames.scienceBlue,
        white: "#FFFFFF",
        whiteLilac: "#FBFBFE",
        lightGrey: "#E5E5E5",
        iron: "#d1d5da4d",
        slateGrey: "#6E7E91",
        mineShaft: "#252525",
        scienceBlue: "#0366D6",
    },
};

export const themeDark = {
    ...common,
    color: {
        background: colorNames.mineShaft,
        text: colorNames.white,
        textSecondary: colorNames.white,
        linkButtonBg: colorNames.dodgerBlue,
        buttonBackground: colorNames.semiDark,
        buttonBorder: colorNames.white,
        buttonToggle: colorNames.white,
        buttonIcon: colorNames.mineShaft,
        sectionBackground: colorNames.semiDark,
        sectionHeaderBorder: colorNames.semiGrey,
        bulletColor: colorNames.dodgerBlue,
        emailHover: colorNames.dodgerBlue,
        iconFocus: colorNames.dodgerBlue,
        iconPortfolio: colorNames.dodgerBlue,
        white: "#FFFFFF",
        whiteLilac: "#252525",
        lightGrey: "#E5E5E5",
        iron: "#d1d5da4d",
        slateGrey: "#6E7E91",
        mineShaft: "#252525",
        scienceBlue: "#0366D6",
    },
};
