export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  Coinbase = 'coinbase',
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: string;
  connectorId: ConnectorNames;
}
