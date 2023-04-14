import React from 'react';
import { Box, Dialog, styled, Typography } from '@mui/material';
import { Login } from 'types/wallet';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { setIsWalletConnectModalOpen } from 'state/modal/modalSlice';

import WalletCard from './WalletCard';
import config from './config';

const ModalDialog = styled(Dialog)(({ theme }) => ({
  '.MuiDialog-container > .MuiPaper-root': {
    borderRadius: '12px',
    maxWidth: '444px',
    width: '100%',
    background: theme.palette.mode === 'dark' ? '#1F2937' : '#FFFFFF',
    boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
    padding: '24px 28px',
    border: '1px solid #FFFFFF',
  },
}));

const ModalTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
  fontSize: '20px',
  lineHeight: '24px',
}));

interface Props {
  login: Login;
}

const ConnectModal: React.FC<Props> = ({ login }) => {
  const { isWalletConnectModalOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setIsWalletConnectModalOpen(false));
  };

  const onDismiss = () => {
    onClose();
  };

  return (
    <ModalDialog maxWidth="xs" onClose={onClose} open={isWalletConnectModalOpen}>
      <Box>
        <ModalTitle>Connect Wallet</ModalTitle>
      </Box>
      <Box sx={{ marginTop: '24px' }}>
        {config.map((entry) => (
          <WalletCard key={entry.title} login={login} onDismiss={onDismiss} walletConfig={entry} />
        ))}
      </Box>
    </ModalDialog>
  );
};

export { ConnectModal };
