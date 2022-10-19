import { colors } from "../../styles/globals";

export const btn_data = {
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
    large: {
      fontSize: "1.25rem",
      width: "23.75rem",
      height: "4.375rem",
    }
  },
  state: {
    active: {
      backgroundColor: colors.Button_PrimaryBlue,
    },
    inactive: {
      backgroundColor: colors.Button_Gray,
      textColor: colors.Button_TextGrey
    },
    hover: {
      backgroundColor: colors.Button_SecondaryBlue,
      fontWeight: "bolder",
    },
  }
};
