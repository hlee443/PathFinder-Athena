import { colors } from "../../styles/globals";

export const btnData = {
  width: "100%",
  height: "3rem",
  backgroundColor: "transparent",
  borderRadius: "0px",
  border: "0.25rem",
  state: {
    default: {
      borderBottom: "0.25rem solid transparent",
      color: colors.darkGrey,
      fontWeight: "normal",
      iconColor: colors.textBlack,
    },
    hover: {
      borderBottom: "0.25rem solid transparent",
      color: colors.darkGrey,
      fontWeight: "bold",
      iconColor: colors.textBlack,

    },
    clicked: {
      borderBottom: `0.25rem solid ${colors.primaryBlue}`,
      color: colors.darkGrey,
      fontWeight: "bold",
      iconColor: colors.textBlack,

    },
    inactive: {
      borderBottom: "0.25rem solid transparent",
      color: colors.grey,
      fontWeight: "normal",
      iconColor: colors.grey,
    },
  },
};