import { typographyVariants } from './typographyVariants';

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
  },
  secondary: {
    backgroundColor: '#E9C46A',
    backgroundColorHover: 'rgba(233,196,106,0.3)',
  },
};

export const breakpoints = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  breakpoints,
  typographyVariants,
  fontFamily: '\'Fire Sans Condensed\', sans-serif',
};
