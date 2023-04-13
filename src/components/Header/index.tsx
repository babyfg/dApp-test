import { FC, useEffect } from 'react';
import { Box, Button, styled } from '@mui/material';
import { useWeb3React } from '@web3-react/core';

import { useAppDispatch } from 'state/hooks';
import { setIsWalletConnectModalOpen } from 'state/modal/modalSlice';
import useAuth from 'hooks/useAuth';
import { ConnectorNames } from 'types/wallet';
import { shortenAddress } from 'utils/address';
import { connectorLocalStorageKey } from 'config/constants/wallet';

const AppHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  background: '#121212',
  height: '80px',
  padding: '24px 24px',
  position: 'sticky',
  top: '0px',
  zIndex: 150,

  [theme.breakpoints.up('md')]: {
    padding: '24px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '24px 0px',
  },
}));

const MenuSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  alignItems: 'center',

  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    paddingRight: '28px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingRight: '64px',
  },
}));

const ConnectWalletButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '19px',
  padding: '8px 16px',
  border: '2px solid #ffffff',
  borderColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#44403C',
  color: theme.palette.mode === 'dark' ? '#BBBFC6' : '#44403C',
  marginLeft: '12px',
  width: '160px',
  overflowWrap: 'break-word',

  '&:hover': {
    borderWidth: '2px',
  },
}));

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { account } = useWeb3React();
  const { login } = useAuth();

  const persistConnect = () => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames;
    if (connectorId) {
      login(connectorId);
    }
  };

  const onConnectWallet = () => {
    if (!account) {
      dispatch(setIsWalletConnectModalOpen(true));
    }
  };

  useEffect(() => {
    persistConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppHeader>
      <MenuSection>
        <ConnectWalletButton onClick={onConnectWallet} variant="outlined">
          {account ? shortenAddress(account) : 'Connect wallet'}
        </ConnectWalletButton>
      </MenuSection>
    </AppHeader>
  );
};

export default Header;
