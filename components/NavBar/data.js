import { colors } from "../../styles/globals";

export const btnData = {
  width: "10.938rem",
  height: "2.5rem",
  state: {
    default: {
      backgroundColor: colors.backgroundWhite,
      fontWeight: "normal",
    },
    hover: {
      backgroundColor: colors.buttonLightBlue,
      fontWeight: "bolder",
    },
    clicked: {
      backgroundColor: colors.buttonLightBlue,
      fontWeight: "bolder",
    },
  },
};

export const btns = [
  {
    text: "Log In",
    type: "login",
  },
  {
    text: "Sign Up",
    type: "signup",
  },
];

export const menus = [
  {
    src: "Home.svg",
    text: "Home",
    page: "/",
  },
  {
    src: "Library.svg",
    text: "Library",
    page: "/library",
  },
  {
    src: "About.svg",
    text: "About",
    page: "",
  },
];
