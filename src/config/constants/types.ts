import { SupportedChainId } from 'config/constants/chains';

export interface Address {
  [SupportedChainId.MAINNET]: string;
  [SupportedChainId.TESTNET]: string;
}
