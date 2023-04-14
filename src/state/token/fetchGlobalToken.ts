/* eslint-disable no-underscore-dangle */
import multicall from 'utils/multicall';
import { getOBOLAddress, getObolFtmPairAddress } from 'utils/addressHelpers';
import OBOLTokenAbi from 'config/abi/OBOL.json';
import LpPairAbi from 'config/abi/LpPair.json';
import { getBalanceInEther } from 'utils/formatBalance';

const TAX_RATIO_DENOMINATOR = 10000;

export const fetchGlobalTokenData = async (): Promise<{
  buyTax: number;
  sellTax: number;
  price: number;
  circulationSupply: number;
  totalSupply: number;
}> => {
  // call obol token contract
  const obolAddr = getOBOLAddress();
  const [buyTax, sellTax, totalSupplyRaw] = await multicall(OBOLTokenAbi, [
    {
      address: obolAddr,
      name: 'buyFee',
      params: [],
    },
    {
      address: obolAddr,
      name: 'sellFee',
      params: [],
    },
    {
      address: obolAddr,
      name: 'totalSupply',
      params: [],
    },
  ]);

  const totalSupply = getBalanceInEther(totalSupplyRaw[0]);

  // call OBOL-FTM pair contract
  const pairAddr = getObolFtmPairAddress();
  const [token0, reserves] = await multicall(LpPairAbi, [
    {
      address: pairAddr,
      name: 'token0',
      params: [],
    },
    {
      address: pairAddr,
      name: 'getReserves',
      params: [],
    },
  ]);

  const token0Addr = token0[0];
  const token0Reserve = reserves[0];
  const token1Reserve = reserves[1];
  const obolPriceInFtm =
    token0Addr === obolAddr
      ? getBalanceInEther(token1Reserve) / getBalanceInEther(token0Reserve)
      : getBalanceInEther(token0Reserve) / getBalanceInEther(token1Reserve);

  return {
    buyTax: buyTax[0].toNumber() / TAX_RATIO_DENOMINATOR,
    sellTax: sellTax[0].toNumber() / TAX_RATIO_DENOMINATOR,
    price: obolPriceInFtm,
    circulationSupply: totalSupply,
    totalSupply,
  };
};
