import { FC } from 'react';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import { useWeb3React } from '@web3-react/core';

import { useAppDispatch, useAppSelector } from 'state/hooks';
import ObolTokenLogo from 'assets/images/tokens/obol.svg';
import { setIsWalletConnectModalOpen } from 'state/modal/modalSlice';
import { shortenAddress } from 'utils/address';

const VaultsContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '100vh',
  background: '#000000',
  padding: '24px 24px',
}));

const TokenCard = styled(Box)(() => ({
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  border: '1px solid #dac0aa',
  borderRadius: '24px',
  background: '#424242',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  padding: '16px',
  alignItems: 'center',
  whiteSpace: 'break-spaces',
}));

// header
const CardHeader = styled(Box)(() => ({
  position: 'relative',
}));

const CardTitle = styled(Typography)(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '800',
  color: '#FFFFFF',
  margin: '0',
  fontSize: '24px',
  lineHeight: '1.2',
  textAlign: 'center',
}));

const CardActionBox = styled(Box)(() => ({
  position: 'absolute',
  top: '0px',
  right: '0px',
}));

const ConnectWalletButton = styled(Button)(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '1.2',
  padding: '5px 15px',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  color: '#FFFFFF',
  width: 'auto',

  '&:hover': {
    border: '1px solid rgba(255, 255, 255, 0.5)',
  },
}));

// content
const CardContent = styled(Box)(() => ({}));

const TaxSection = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '24px',
  gap: '16px',
}));

const TaxLabel = styled(Typography)(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '800',
  color: '#FFFFFF',
  margin: '0',
  fontSize: '16px',
  lineHeight: '1.33',
  textAlign: 'center',
  textShadow: 'black 2px 1px 1px',
}));

const TaxValue = styled(Typography)(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '800',
  color: '#FFFFFF',
  margin: '0',
  fontSize: '16px',
  lineHeight: '1.33',
  textAlign: 'center',
  textShadow: 'black 2px 1px 1px',
}));

const TokenImg = styled('img')(() => ({
  width: '80px',
}));

const PriceSection = styled(Box)(() => ({
  alignItems: 'center',
  margin: '16px 0px',
}));

const Label = styled(Typography)(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  color: '#FFFFFF',
  margin: '0',
  fontSize: '14px',
  lineHeight: '1.33',
  textAlign: 'center',
}));

const Value = styled(Typography)(() => ({
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  color: '#FFFFFF',
  margin: '0',
  fontSize: '14px',
  lineHeight: '1.33',
  textAlign: 'center',
}));

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { account } = useWeb3React();

  const { buyTax, sellTax, price, marketcap, circulationSupply, totalSupply } = useAppSelector((state) => state.token);

  const onConnectWallet = () => {
    if (!account) {
      dispatch(setIsWalletConnectModalOpen(true));
    }
  };

  return (
    <VaultsContainer>
      <Grid container>
        <Grid item xs={4}>
          <TokenCard>
            <CardHeader>
              <CardTitle>OBOL</CardTitle>
              <CardActionBox>
                <ConnectWalletButton onClick={onConnectWallet} variant="outlined">
                  {account ? shortenAddress(account) : 'Connect wallet'}
                </ConnectWalletButton>
              </CardActionBox>
            </CardHeader>

            <CardContent>
              <TaxSection>
                <Box>
                  <TaxLabel>BUY TAX</TaxLabel>
                  <TaxValue>{`${(100 * buyTax).toFixed(0)}%`}</TaxValue>
                </Box>
                <Box>
                  <TokenImg src={ObolTokenLogo} />
                </Box>
                <Box>
                  <TaxLabel>SELL TAX</TaxLabel>
                  <TaxValue>{`${(100 * sellTax).toFixed(0)}%`}</TaxValue>
                </Box>
              </TaxSection>
              <PriceSection>
                <Label>Current Price</Label>
                <Value>{`$${price.toFixed(2)}`}</Value>
              </PriceSection>
              <Box sx={{ textAlign: 'center' }}>
                <Box>
                  <Box alignItems="center" display="flex" justifyContent="center">
                    <Label>{`Market Cap: `}</Label>
                    <Value>{`$${(totalSupply * 0.8).toFixed(0)}`}</Value>
                  </Box>
                  <Box alignItems="center" display="flex" justifyContent="center">
                    <Label>{`Cirtulating Supply: `}</Label>
                    <Value>{`${circulationSupply.toFixed(0)}`}</Value>
                  </Box>
                  <Box alignItems="center" display="flex" justifyContent="center">
                    <Label>{`Total Supply: `}</Label>
                    <Value>{`${totalSupply.toFixed(0)}`}</Value>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </TokenCard>
        </Grid>
      </Grid>
    </VaultsContainer>
  );
};

export default HomePage;
