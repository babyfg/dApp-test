import { SupportedChainId } from './chains';

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
// eslint-disable-next-line import/prefer-default-export
export const INFURA_NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.TESTNET]: `https://TESTNET.infura.io/v3/${INFURA_KEY}`,
};

export const ANKR_NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://rpc.ankr.com/fantom`,
  [SupportedChainId.TESTNET]: `https://rpc.ankr.com/fantom`,
};
