import { FC } from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(Button)(() => ({
  fontFamily: 'Inter',
  width: '100%',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '17px',
  padding: '13.5px 16px',
}));

interface ContainedButtonProps extends ButtonProps {
  colorType?: string;
}

const ContainedButton: FC<ContainedButtonProps> = ({ children, disabled, onClick, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    {children}
  </StyledButton>
);

export { ContainedButton };
