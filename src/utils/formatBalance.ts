import { BigNumber, ethers } from 'ethers';

export const getBalanceInEther = (balance: BigNumber) => {
  const displayBalance = ethers.utils.formatEther(balance.toString());
  return Number(displayBalance);
};

export const getBalanceInWei = (balance: string, decimals = 18) => ethers.utils.parseUnits(balance, decimals || 18);
