import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    formBlack: '#111414',
    bodyWhite: '#FAFAFA',
    bodyBlack: '#0D1010',
    inactiveBlack: 'rgba(250, 250, 250, 0.4)',
    headerBlack: '#212121',
    error: '#D30000',
    inactiveWhite: '#BDBDBD',
    accent:
      'linear-gradient(276deg, rgba(214, 75, 25, 1) 0.35%, rgba(223, 78, 26, 1) 41.11%, rgba(253, 169, 0, 1) 100.69%)',
    accentAlt: 'linear-gradient(to right, #f56565, #ed8936, #f6e05e);',
  },
});
