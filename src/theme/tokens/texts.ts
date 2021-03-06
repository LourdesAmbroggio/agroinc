const text = {
  fonts: 'Montserrat, Open Sans ',
  size: {
    mobile: {
      title: '32px',
      subTitle: '26px',
      regular: '16px',
      small: '12px',
    },
    desktop: {
      title: '32px',
      subTitle: '26px',
      regular: '16px',
      small: '12px',
    },
  },
  weight: {
    light: 200,
    regular: 400,
    bold: 700,
  },
};

export default text;

export interface ISizes {
  mobile: {
    title: string;
    subTitle: string;
    regular: string;
    small: string;
  };
  desktop: {
    title: string;
    subTitle: string;
    regular: string;
    small: string;
  };
}

export interface IWeight {
  light: number;
  regular: number;
  bold: number;
}
