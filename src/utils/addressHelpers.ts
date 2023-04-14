import { multicallAddr, obolAddr, obolFtmPairAddr, wftmAddr } from 'config/constants/contract';
import { Address } from 'config/constants/types';
import { activeChainId, mainNetChainId } from 'utils/web3';

export const getAddress = (address: Address): string =>
  address[activeChainId] ? address[activeChainId] : address[mainNetChainId];

export const getWFTMAddress = () => getAddress(wftmAddr);

export const getOBOLAddress = () => getAddress(obolAddr);

export const getMulticallAddress = () => getAddress(multicallAddr);

export const getObolFtmPairAddress = () => getAddress(obolFtmPairAddr);
