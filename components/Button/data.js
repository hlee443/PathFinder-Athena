import { colors } from "../../styles/globals";

export const btnData = {
  size: {
    small: {
      fontSize: "1rem",
      width: "10.625rem",
      height: "3.063rem",
    },
    med: {
      fontSize: "1.125rem",
      width: "15rem",
      height: "3.875rem",
    },
    // large: {
    //   fontSize: "1.25rem",
    //   width: "23.75rem",
    //   height: "4.375rem",
    // },
  },
  // state: {
  //   active: {
  //     backgroundColor: colors.buttonPrimaryBlue,
  //   },
  //   inactive: {
  //     backgroundColor: colors.buttonGray,
  //     textColor: colors.buttonTextGrey,
  //   },
  //   hover: {
  //     backgroundColor: colors.buttonSecondaryBlue,
  //     fontWeight: "bolder",
  //   },
  // },
  variants: {
    primary: {
      backgroundColor: colors.buttonPrimaryBlue,
      boxShadow: "0px 2px 10px rgba(159, 159, 159, 0.2), inset -2px -2px 8px rgba(150, 173, 252, 0.6), inset 2px 2px 8px rgba(255, 255, 255, 0.2)"
    },
    secondary: {
      backgroundColor: colors.buttonSecondaryBlue,
      boxShadow: "inset -2px -2px 8px #7997FF, inset 2px 2px 8px rgba(239, 242, 255, 0.2);"
    },
    active: {
      backgroundColor: colors.buttonPrimaryBlue,
    },
    inactive: {
      backgroundColor: colors.buttonGray,
      textColor: colors.buttonTextGrey,
    },
    hover: {
      backgroundColor: colors.buttonSecondaryBlue,
      fontWeight: "bolder",
    },
  }
};
