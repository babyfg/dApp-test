import { createContext, FC, useMemo, useState } from 'react';

import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import { getItem, setItem } from 'utils/helper';
import breakpoints from './breakpoints';
import GlobalCss from './defaultCss';
import palette from './palette';
import shape from './shape';
import typography from './typography';

declare module '@mui/material/styles' {
  interface TypeBackground {
    bg: string;
    transparendBg: string;
  }
  interface PalatteOptions {
    success: string;
  }
}

// ----------------------------------------------------------------------
const themeMode = getItem('userThemeMode');
if (themeMode === null) {
  setItem('userThemeMode', 'light');
}

const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface Props {
  children: React.ReactNode;
}

const ThemeConfig: FC<Props> = ({ children }) => {
  const curTheme = getItem('userThemeMode');
  const [mode, setMode] = useState<'light' | 'dark'>(curTheme === 'light' ? 'light' : 'dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const themeOptions = useMemo(
    () => ({
      palette:
        mode === 'light'
          ? {
              mode,
              ...palette.paletteLight,
            }
          : {
              mode,
              ...palette.paletteDark,
            },
      shape,
      typography,
      breakpoints,
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <GlobalCss />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};

export { ThemeConfig, ColorModeContext };
