import { BigNumber } from 'ethers';

export interface PortfolioInfo {
  tokenId: number;
  isApproved?: boolean;
  value: BigNumber;
  loanAmount: BigNumber;
  borrowApr?: number;
  debtOwed?: BigNumber;
  debt?: number;
  healthFactor?: number;
  autoRenew?: number;
  state?: number;
  loan?: any;
  netApy?: number;
  leveragedApy?: number;
  borrowApy?: number;
  lendAddr?: string;
}
