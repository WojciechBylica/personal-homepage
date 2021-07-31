const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    lightGrey: "#E5E5E5",
    iron: "#d1d5da4d",
    slateGrey: "#6E7E91",
    mineShaft: "#252525",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    semiDark:"#363636b8",
};

const media = {
    mobileMax: 767,
};

export const themeLight = {
    ...media,
    color: {
        background: colorNames.whiteLilac,
        text: colorNames.mineShaft,
        textSecondary: colorNames.slateGrey,
        linkButtonBg: colorNames.scienceBlue,
        buttonBackground: colorNames.lightGrey,
        buttonBorder: colorNames.slateGrey,
        buttonToggle: colorNames.slateGrey,
        buttonIcon: colorNames.white,
        white: "#FFFFFF",
        whiteLilac: "#FBFBFE",
        lightGrey: "#E5E5E5",
        iron: "#d1d5da4d",
        slateGrey: "#6E7E91",
        mineShaft: "#252525",
        scienceBlue: "#0366D6",
    },
    media: {
        mobileMax: 767,
    }
}

export const themeDark = {
    ...media,
    color: {
        background: colorNames.mineShaft,
        text: colorNames.white,
        textSecondary: colorNames.white,
        linkButtonBg: colorNames.dodgerBlue,
        buttonBackground: colorNames.semiDark,
        buttonBorder: colorNames.white,
        buttonToggle: colorNames.white,
        buttonIcon: colorNames.mineShaft,
        white: "#FFFFFF",
        whiteLilac: "#252525",
        lightGrey: "#E5E5E5",
        iron: "#d1d5da4d",
        slateGrey: "#6E7E91",
        mineShaft: "#252525",
        scienceBlue: "#0366D6",
    },
    media: {
        mobileMax: 767,
    }
}


// export const themeLight = {
//     ...media,
//     colors: {
//         primary: colorNames.mineShaft,
//         secondary: colorNames.slateGrey,
//         background: colorNames.whiteLilac,
//         white: "#FFFFFF",
//     whiteLilac: "#FBFBFE",
//     lightGrey: "#E5E5E5",
//     iron: "#d1d5da4d",
//     slateGrey: "#6E7E91",
//     mineShaft: "#252525",
//     scienceBlue: "#0366D6",
//     },
// };

// export const themeDark = {
//     ...media,
//     colors: {
//         primary: colorNames.white,
//         secondary: colorNames.white,
//         background: colorNames.mineShaft,
//         white: "#FFFFFF",
//     whiteLilac: "#FBFBFE",
//     lightGrey: "#E5E5E5",
//     iron: "#d1d5da4d",
//     slateGrey: "#6E7E91",
//     mineShaft: "#252525",
//     scienceBlue: "#0366D6",
//     },
// }
