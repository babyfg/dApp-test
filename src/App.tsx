import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CircularProgress } from '@mui/material';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'utils/web3React';

import Router from './routes';
import { store } from './state/store';
import { ThemeConfig } from './theme';

function App(): JSX.Element {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
  });

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeConfig>
            <Suspense fallback={<CircularProgress sx={{ margin: '50px auto' }} />}>
              <Router />
            </Suspense>
          </ThemeConfig>
        </Provider>
      </ApolloProvider>
    </Web3ReactProvider>
  );
}

export default App;
