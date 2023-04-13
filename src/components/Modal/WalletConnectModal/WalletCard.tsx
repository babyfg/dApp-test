import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { Config, Login } from 'types/wallet';
import { connectorLocalStorageKey } from 'config/constants/wallet';

const CardCointainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '16px',
  margin: '8px 0px',
  cursor: 'pointer',
  padding: '16px',
  background: theme.palette.mode === 'dark' ? '#111827' : '#F5F5F4',
  border: '1px solid transparent',

  '&:hover': {
    borderColor: theme.palette.mode === 'dark' ? '#4B5563' : '#D6D3D1',
  },
}));

const WalletIcon = styled('img')({
  width: '32px',
  marginRight: '12px',
});

const WalletName = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#BBBFC6' : '#000000',
  fontSize: '14px',
  lineHeight: '17px',
  fontWeight: '400',
}));

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon } = walletConfig;

  return (
    <CardCointainer
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
    >
      <WalletIcon alt="wallet icon" src={icon} />
      <WalletName>{title}</WalletName>
    </CardCointainer>
  );
};

export default WalletCard;
