export const screenSize = {
  mobile: '600px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
};

export const mediaQuery = {
  minWidth: {
    mobile: `(min-width: ${screenSize.mobile})`,
    tablet: `(min-width: ${screenSize.tablet})`,
    laptop: `(min-width: ${screenSize.laptop})`,
    desktop: `(min-width: ${screenSize.desktop})`,
  },
  maxWidth: {
    mobile: `(max-width: ${screenSize.mobile})`,
    tablet: `(max-width: ${screenSize.tablet})`,
    laptop: `(max-width: ${screenSize.laptop})`,
    desktop: `(max-width: ${screenSize.desktop})`,
  }
};
