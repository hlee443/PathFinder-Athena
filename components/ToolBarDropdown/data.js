import { colors } from "../../styles/globals";
import {
  faBook,
  faFolder,
  faFont,
  faFillDrip,
  faTextSize,
  faLineHeight,
  faTextWidth,
  faClose,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { iconSvgs } from "../Icon/data";
import { btnArr } from "../TabBar/data";

var num = 0;

export const libraryDataArr = [
  {
    bgColor: colors.primaryBlue,
    text: "Library",
    faIconName: faBook,
    faIconNameRight: faClose,
  },
  {
    faIconName: faFolder,
    text: btnArr[num].text,
    faIconNameRight: faChevronRight,
  },
  {
    faIconName: faFolder,
    text: btnArr[num + 1].text,
    faIconNameRight: faChevronRight,
  },
  {
    faIconName: faFolder,
    text: btnArr[num + 2].text,
    faIconNameRight: faChevronRight,
  },
];
  
export const typefaceDataArr = [
  {
    faIconName: faFillDrip,
    text: "Background Color",
    width: "6rem",
    inputType: "color",
  },
  {
    faIconName: faFont,
    text: "Typeface",
    inputType: "dropdown",
    width: "12rem",
  },
  {
    text: "Font Size",
    width: "5rem",
    unit: "pt",
    inputType: "text",
    src: iconSvgs.fontSize,
    placeholder: "16"
  },
  {
    text: "Line Height",
    width: "5rem",
    unit: "%",
    inputType: "text",
    src: iconSvgs.lineSpacing,
    placeholder: "150"
  },
  {
    faIconName: faTextWidth,
    text: "Letter Spacing",
    width: "5rem",
    unit: "pt",
    inputType: "text",
    src: iconSvgs.letterSpacing,
    placeholder: "0.35"
  },
];

