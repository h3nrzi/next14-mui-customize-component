'use client';

import { createTheme } from '@mui/material/styles';

// import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import { Colors } from './colors';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap'
// });
const iranSans = localFont({ src: '../../public/iranSans.ttf', display: 'swap' });

interface Props {
  color?: string;
  width?: number;
  height?: number;
  border?: string;
  borderColor?: string;
  backgroundColor?: string;
  borderStyle?: string;
  borderRadius?: string;
  borderTop?: string;
  borderLeft?: string;
  clipPath?: string;
  '&:hover'?: Props;
}

interface ComponentProps {
  styleOverrides: {
    root: Props;
  };
}

declare module '@mui/material/styles' {
  interface Components {
    MainMenuFrameComponent?: ComponentProps;
    GameButtonComponent?: ComponentProps;
  }
}

const theme = createTheme({
  typography: {
    // fontFamily: Roboto.style.fontFamily
    fontFamily: iranSans.style.fontFamily
  },
  palette: {
    mode: 'light'
  },
  components: {
    MainMenuFrameComponent: {
      styleOverrides: {
        root: {
          width: 250,
          height: 400,
          border: `12px ${Colors.primary}`,
          borderStyle: 'ridge solid',
          borderRadius: '36px'
        }
      }
    },
    GameButtonComponent: {
      styleOverrides: {
        root: {
          width: 200,
          height: 40,
          borderTop: `1px solid ${Colors.lime_green}`,
          borderLeft: `1px solid ${Colors.lime_green}`,
          backgroundColor: Colors.secondary,
          clipPath: `polygon( 4% 0, 100% 0, 100% 80%, 94% 100%, 0 100%, 0 20% )`,
          color: '#fff',
          '&:hover': {
            border: 'none',
            backgroundColor: Colors.primary
          }
        }
      }
    }
  }
});

export default theme;
