import { colors } from "../../styles/globals";

export const btnData = {
  width: "21rem",
  height: "4.375rem",
  backgroundColor: "transparent",
  borderRadius: "0px",
  border: "0.25rem",
  state: {
    default: {
      borderBottom: "0.25rem solid transparent",
    },
    hover: {
      borderBottom: "0.25rem solid transparent",
    },
    clicked: {
      borderBottom: `0.25rem solid ${colors.primaryBlue}`,
    },
  },
};
