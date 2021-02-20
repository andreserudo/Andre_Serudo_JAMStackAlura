export const colorPallet = [
  {
    theme: 'light',
    mainBackgroundColor: '#FFFFFF',
    sectionBackgroundColor: '#FBF0DB',
    navBackgroundColor: '#FFF8E6',
    titleColor: '#312F2F',
    paragraphyColor: '#312F2F',
    linkHoverColor: 'rgba(49, 47, 47,0.6)',
  },
  {
    theme: 'dark',
    mainBackgroundColor: '#010409',
    sectionBackgroundColor: '#120D02',
    navBackgroundColor: '#362707',
    titleColor: '#EBEAEA',
    paragraphyColor: '#EBEAEA',
  },
];

export const colors = {
  background: {
    main: {
      color: '#FFFFFF',
    },
  },
  primary: {
    backgroundColor: '#FFF8E6',
    color: '#000000',
    colorTitle: 'rgba(0,0,0,0.6)',
    colorTitleHover: 'rgba(0,0,0,0.3)',
  },
  secondary: {
    backgroundColor: '#E9C46A',
    backgroundColorHover: 'rgba(233,196,106,0.3)',
  },
};

export const breakpoints = {
  xs: 280,
  sm: 390,
  md: 620,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  breakpoints,
  fontFamily: '\'Fire Sans Condensed\', sans-serif',
  colorPallet,
};
