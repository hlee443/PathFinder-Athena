import {
  faVolumeHigh,
  faMagnifyingGlass,
  faFileLines,
  faHighlighter,
  faFont,
  faBookmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export var toolbarNum = 1;

export const toolBarData = {
  1: {
    name: "Text-to-Speech",
    icon: faVolumeHigh,
  },
  2: {
    name: "Dictionary",
    icon: faMagnifyingGlass,
  },
  3: {
    name: "Summarize",
    icon: faFileLines,
  },
  4: {
    name: "Highlighter",
    icon: faHighlighter,
  },
  5: {
    name: "Typeface",
    icon: faFont,
  },
  6: {
    name: "Save",
    icon: faBookmark,
  },
  7: {
    name: "Download",
    icon: faDownload,
  }
};