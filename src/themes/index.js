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
  },
  secondary: {
    color: '#E9C46A',
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
