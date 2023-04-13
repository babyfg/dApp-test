import { Components, Theme } from '@mui/material';
import { merge } from 'lodash';

import Accordion from './Accordion';
import Button from './Button';
import Card from './Card';
import IconButton from './IconButton';
import Input from './Input';
import Lists from './Lists';
import Paper from './Paper';
import Typography from './Typography';

// ----------------------------------------------------------------------

const ComponentsOverrides = (theme: Theme): Components<Theme> =>
  merge(
    Card(theme),
    Lists(theme),
    Paper(),
    Input(theme),
    Button(theme),
    Typography(theme),
    IconButton(theme),
    Accordion(theme)
  );

export default ComponentsOverrides;
