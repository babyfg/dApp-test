import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { ConnectModal } from 'components/Modal';
import { useAppSelector } from 'state/hooks';
import useAuth from 'hooks/useAuth';

const MainLayoutBox = styled(Box)(() => ({
  minHeight: '100vh',
}));

const OutLetContainer = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.grey.A100,
}));

const MainLayout: FC = () => {
  const { isWalletConnectModalOpen } = useAppSelector((state) => state.modal);
  const { login } = useAuth();

  return (
    <MainLayoutBox>
      {isWalletConnectModalOpen && <ConnectModal login={login} />}

      <Box>
        <Suspense fallback={<Box />}>
          <OutLetContainer>
            <Box sx={{ display: 'flex' }}>
              <Outlet />
            </Box>
          </OutLetContainer>
        </Suspense>
      </Box>
    </MainLayoutBox>
  );
};

export default MainLayout;
