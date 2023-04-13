import { Config, ConnectorNames } from 'types/wallet';

import MetamaskLogo from 'assets/images/wallet-logos/metamask.png';
import WalletConnectLogo from 'assets/images/wallet-logos/wallet-connect.png';
import CoinbaseLogo from 'assets/images/wallet-logos/coinbase.png';

const connectors: Config[] = [
  {
    title: 'Metamask',
    icon: MetamaskLogo,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'Coinbase Wallet',
    icon: CoinbaseLogo,
    connectorId: ConnectorNames.Coinbase,
  },
  {
    title: 'WalletConnect',
    icon: WalletConnectLogo,
    connectorId: ConnectorNames.WalletConnect,
  },
];

export default connectors;
