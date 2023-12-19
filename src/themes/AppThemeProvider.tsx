import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useAppSelector } from '@/app/store';
import { PaletteMode } from '@mui/material';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

declare module '@mui/material/styles' {
  interface ColorOptions {
    900: string;
    800: string;
    700: string;
    600: string;
    500: string;
    400: string;
    300: string;
    200: string;
    100: string;
  }
  interface Theme {
    cr: {
      primary: ColorOptions;
      info: ColorOptions;
      success: ColorOptions;
      warning: ColorOptions;
      error: ColorOptions;
      secondary: ColorOptions;
    };
  }
  interface ThemeOptions {
    cr?: {
      primary?: ColorOptions;
      info?: ColorOptions;
      success?: ColorOptions;
      warning?: ColorOptions;
      error?: ColorOptions;
      secondary?: ColorOptions;
    };
  }
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const mode = useAppSelector((state) => state.user.mode);
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: mode as PaletteMode,
      },
      cr: {
        primary: {
          900: '#0A196F',
          800: '#102587',
          700: '#1a37a7',
          600: '#264bc8',
          500: '#3563e9',
          400: '#658df1',
          300: '#85a8f8',
          200: '#aec8fc',
          100: '#d6e4fd',
        },
        secondary: {
          900: '#040815',
          800: '#080c19',
          700: '#0d121f',
          600: '#131825',
          500: '#1a202c',
          400: '#596780',
          300: '#90a3bf',
          200: '#c3d4e9',
          100: '#e0e9f4',
        },
        success: {
          900: '#3b6506',
          800: '#4c7a0b',
          700: '#659711',
          600: '#7fb519',
          500: '#9cd323',
          400: '#bce455',
          300: '#d3f178',
          200: '#e8faa6',
          100: '#f5fcd2',
        },
        warning: {
          900: '#7a4d0b',
          800: '#936312',
          700: '#b7821d',
          600: '#dba32a',
          500: '#ffc73a',
          400: '#ffd96b',
          300: '#ffe488',
          200: '#ffefb0',
          100: '#fff8d7',
        },
        error: {
          900: '#7a0619',
          800: '#930b16',
          700: '#b71112',
          600: '#db2719',
          500: '#ff4423',
          400: '#ff7f59',
          300: '#ffa37a',
          200: '#ffc8a6',
          100: '#ffe7d3',
        },
        info: {
          900: '#102e7a',
          800: '#1a4393',
          700: '#2a60b7',
          600: '#3d81db',
          500: '#54a6ff',
          400: '#7ec2ff',
          300: '#98d3ff',
          200: '#bae5ff',
          100: '#dcf3ff',
        },
      },
    
    }),
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
