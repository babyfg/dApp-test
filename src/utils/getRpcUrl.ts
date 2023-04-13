import random from 'lodash/random';
import { ANKR_NETWORK_URLS, INFURA_NETWORK_URLS } from 'config/constants/rpc';
import { SupportedChainId } from 'config/constants/chains';

export const infuraMainnetNodes = [
  INFURA_NETWORK_URLS[SupportedChainId.MAINNET],
  INFURA_NETWORK_URLS[SupportedChainId.MAINNET],
  INFURA_NETWORK_URLS[SupportedChainId.MAINNET],
];

export const infuraTestnetNodes = [
  INFURA_NETWORK_URLS[SupportedChainId.TESTNET],
  INFURA_NETWORK_URLS[SupportedChainId.TESTNET],
  INFURA_NETWORK_URLS[SupportedChainId.TESTNET],
];

export const ankrMainnetNodes = [
  ANKR_NETWORK_URLS[SupportedChainId.MAINNET],
  ANKR_NETWORK_URLS[SupportedChainId.MAINNET],
  ANKR_NETWORK_URLS[SupportedChainId.MAINNET],
];

export const ankrTestnetNodes = [
  ANKR_NETWORK_URLS[SupportedChainId.TESTNET],
  ANKR_NETWORK_URLS[SupportedChainId.TESTNET],
  ANKR_NETWORK_URLS[SupportedChainId.TESTNET],
];

const getNodeUrl = (networkId?: number) => {
  const chainId = networkId || parseInt(process.env.REACT_APP_CHAIN_ID || '250', 10);
  const nodes = chainId === 250 ? ankrMainnetNodes : ankrTestnetNodes;
  const randomIndex = random(0, nodes.length - 1);
  return nodes[randomIndex];
};

export default getNodeUrl;
