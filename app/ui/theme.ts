import { StyleFunctionProps, extendTheme } from '@chakra-ui/react';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

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
  components: {
    Button: {
      variants: {
        accent: {
          bg: 'accent',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '15.4px',
          width: '100%',
          padding: '30px 0',
          color: 'bodyWhite',
          borderRadius: '50px',
          _hover: {
            color: 'inactiveWhite',
            _disabled: {
              background: 'accent',
            },
          },
        },
        accentAlt: {
          bg: 'transparent',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '15.4px',
          width: '100%',
          padding: '30px 0',
          color: 'bodyWhite',
          border: '2px solid transparent',
          borderRadius: '50px',
          _hover: { color: 'inactiveWhite' },
          background:
            'linear-gradient(#111414, #111414) padding-box, linear-gradient(276deg, rgba(214, 75, 25, 1) 0.35%, rgba(223, 78, 26, 1) 41.11%, rgba(253, 169, 0, 1) 100.69%) border-box',
        },
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'transparent',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
});
