import { FC } from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '15px',
  color: theme.palette.mode === 'dark' ? '#9CA3AF' : '#6B7280',
  textDecoration: 'underline',
  background: 'transparent',

  '&:hover': {
    background: 'transparent',
    textDecoration: 'underline',
    color: theme.palette.mode === 'dark' ? '#BBBFC6' : '#44403C',
  },
}));

interface LinkButtonProps extends ButtonProps {}

const LinkButton: FC<LinkButtonProps> = ({ children, onClick, ...props }) => (
  <StyledButton onClick={onClick} variant="text" {...props}>
    {children}
  </StyledButton>
);

export { LinkButton };
