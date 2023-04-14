import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import Web3 from 'web3';

import { ConnectorNames } from 'types/wallet';
import getNodeUrl from 'utils/getRpcUrl';
import OBOL_LOGO_URL from 'assets/images/logo.svg';
import { ankrMainnetNodes, ankrTestnetNodes } from './getRpcUrl';

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID || '250', 10);
const rpcUrl = getNodeUrl();

const mainnetParams = {
  chainId: 250,
  chainName: 'Fantom mainnet',
  nativeCurrency: {
    name: 'Fantom Mainnet',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ankrMainnetNodes,
  blockExplorerUrls: ['https://ftmscan.io/'],
};

const testnetParams = {
  chainId: 4002,
  chainName: 'Fantom testnet',
  nativeCurrency: {
    name: 'Fantom testnet',
    symbol: 'FTM',
    decimals: 18,
  },
  rpcUrls: ankrTestnetNodes,
  blockExplorerUrls: ['https://testnet.ftmscan.io/'],
};

const params = chainId === 250 ? mainnetParams : testnetParams;

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const walletlink = new WalletLinkConnector({
  url: params.rpcUrls[0],
  appName: 'Based',
  appLogoUrl: OBOL_LOGO_URL,
  supportedChainIds: [250, 4002],
});

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.Coinbase]: walletlink,
};

export const getLibrary = (provider: any): Web3 => provider;
