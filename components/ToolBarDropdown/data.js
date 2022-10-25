import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
} from "@fortawesome/free-solid-svg-icons";
import { iconSvgs } from "../Icon/data";

export const dropdownData = {
  library: [
    {
      backgroundColor: colors.primaryBlue,
      faIconName: faBook,
      labelBg: "transparent",
      labelText: "My Library",
      faIconNameRight: faClose,
    },
    {
      faIconName: faFolder,
      labelBg: "transparent",
      labelText: "Assignments",
      faIconNameRight: "faChevronRight",
      handleClick: "setShowBubble",
    },
    {
      faIconName: faFolder,
      labelBg: "transparent",
      labelText: "Folder 2",
      faIconNameRight: "faChevronRight",
      handleClick: "setShowBubble",
    },
    {
      faIconName: faFolder,
      labelBg: "transparent",
      labelText: "New Folder",
      faIconNameRight: "faChevronRight",
      handleClick: "setShowBubble",
    },
  ],
  typeface: [
    {
      backgroundColor: colors.primaryBlue,
      faIconName: iconSvgs.typeface,
      labelBg: "transparent",
      labelText: "Typeface",
    },
    {
      faIconName: faFillDrip,
      labelBg: "transparent",
      labelText: "Background Color",
      width: "6rem",
      inputType: "color",
    },
    {
      faIconName: faFont,
      labelBg: "transparent",
      labelText: "Typeface",
      inputType: "dropdown",
      width: "12rem",
    },
    {
      labelBg: "transparent",
      labelText: "Font Size",
      inputType: "text",
      width: "5rem",
      unit: "pt",
      placeholder: "#",
      src: iconSvgs.fontSize,
    },
    {
      labelBg: "transparent",
      labelText: "Line Height",
      inputType: "text",
      width: "5rem",
      unit: "pt",
      placeholder: "#",
      src: iconSvgs.lineSpacing,
    },
    {
      labelBg: "transparent",
      labelText: "Letter Spacing",
      inputType: "text",
      width: "5rem",
      unit: "pt",
      placeholder: "#",
      src: iconSvgs.letterSpacing,
    },
  ],
};
