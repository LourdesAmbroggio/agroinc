import colors from './tokens/colors';
import texts, { ISizes, IWeight } from './tokens/texts';

export interface ITheme {
  colors: {
    common: {
      black: string;
      white: string;
    };
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    texts: {
      primary: string;
      secundary: string;
      tertiary: string;
    };
  };
  fontFamilies: string;
  fontSizes: ISizes;
  fontWeights: IWeight;
}

export const lightTheme: ITheme = {
  colors: {
    common: {
      black: colors.common.black,
      white: colors.common.white,
    },
    primary: colors.green.green100,
    secondary: colors.gray.gray30,
    tertiary: colors.green.green10,
    background: '#FDFEFF',
    texts: {
      primary: colors.green.green100,
      secundary: colors.common.black,
      tertiary: colors.gray.gray50,
    },
  },
  fontFamilies: texts.fonts,
  fontSizes: texts.size,
  fontWeights: texts.weight,
};
