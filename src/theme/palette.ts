import { alpha, darken, PaletteOptions } from '@mui/material';

const BLACK = '#000';
const WHITE = '#fff';

const COOL_GRAY_900 = '#111827';

const PRIMARY = {
  light: '#ffffff',
  main: '#374151',
  dark: darken('#374151', 0.2),
  contrastText: WHITE,
};

const PRIMARYDARK = {
  light: COOL_GRAY_900,
  main: '#374151',
  dark: darken('#374151', 0.2),
  contrastText: BLACK,
};

const GRAY = {
  '100': '#DCDCDC',
  '200': alpha(BLACK, 0.2),
  '300': '#F3F3F3',
  A100: '#D6D3D1', // header border
  A200: '#E5E7EB', // wallet connect button border
  A400: '#6B7280', // sidebar item color
  A700: '#F7F7F7',
};

const GRAYDARK = {
  '100': '#DCDCDC',
  '200': alpha(WHITE, 0.2),
  '300': '#F3F3F3',
  A100: '#4B5563', // header border
  A200: '#9CA3AF', // wallet connect button border
  A400: '#6B7280', // sidebar item color
  A700: '#F7F7F7',
};
const SUCCESS = {
  light: 'rgba(0,240,144,0.2)',
  main: '#00F090',
};
const ERROR = {
  light: 'rgba(240,64,0,0.2)',
  main: '#F04000',
};

const BACKGROUND_COLOR = {
  default: '#ffffff',
  paper: WHITE,
};

const BACKGROUND_COLOR_DARK = {
  default: '#111827',
  paper: WHITE,
};

const TEXT_COLOR = {
  primary: '#44403C',
  secondary: '#6B7280',
};

const TEXT_COLOR_DARK = {
  primary: '#D1D5DB',
  secondary: '#E5E7EB',
};

const paletteLight: PaletteOptions = {
  common: { black: BLACK, white: WHITE },
  primary: { ...PRIMARY },
  grey: { ...GRAY },
  success: { ...SUCCESS },
  error: { ...ERROR },
  text: { ...TEXT_COLOR },
  background: { ...BACKGROUND_COLOR },
};

const paletteDark: PaletteOptions = {
  common: { black: WHITE, white: BLACK },
  primary: { ...PRIMARYDARK },
  grey: { ...GRAYDARK },
  success: { ...SUCCESS },
  error: { ...ERROR },
  text: { ...TEXT_COLOR_DARK },
  background: { ...BACKGROUND_COLOR_DARK },
};

export default { paletteLight, paletteDark };
