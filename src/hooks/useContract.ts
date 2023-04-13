import { useEffect, useState } from 'react';
import { AbiItem } from 'web3-utils';
import { ContractOptions } from 'web3-eth-contract';

import useWeb3 from 'hooks/useWeb3';
import WFTMAbi from 'config/abi/WFTM.json';
import MulticallAbi from 'config/abi/Multicall.json';
import { getMulticallAddress, getWFTMAddress } from 'utils/addressHelpers';

const useContract = (abi: AbiItem, address: string, contractOptions?: ContractOptions) => {
  const web3 = useWeb3();
  const [contract, setContract] = useState(new web3.eth.Contract(abi, address, contractOptions));

  useEffect(() => {
    setContract(new web3.eth.Contract(abi, address, contractOptions));
  }, [abi, address, contractOptions, web3]);

  return contract;
};

// wftm token contract
export const useMulticallContract = () => useContract(WFTMAbi as unknown as AbiItem, getWFTMAddress());

// multicall token contract
export const useWFTMContract = () => useContract(MulticallAbi as unknown as AbiItem, getMulticallAddress());

export default useContract;
