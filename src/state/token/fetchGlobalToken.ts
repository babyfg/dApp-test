import multicall from 'utils/multicall';
import { getOBOLAddress } from 'utils/addressHelpers';
import OBOLTokenAbi from 'config/abi/OBOL.json';
import { getBalanceInEther } from 'utils/formatBalance';

const TAX_RATIO_DENOMINATOR = 10000;

export const fetchGlobalTokenData = async () => {
  const [buyTax, sellTax, totalSupplyRaw] = await multicall(OBOLTokenAbi, [
    {
      address: getOBOLAddress(),
      name: 'buyFee',
      params: [],
    },
    {
      address: getOBOLAddress(),
      name: 'sellFee',
      params: [],
    },
    {
      address: getOBOLAddress(),
      name: 'totalSupply',
      params: [],
    },
  ]);

  const totalSupply = getBalanceInEther(totalSupplyRaw[0]);

  return {
    buyTax: buyTax[0].toNumber() / TAX_RATIO_DENOMINATOR,
    sellTax: sellTax[0].toNumber() / TAX_RATIO_DENOMINATOR,
    price: 0,
    marketcap: 0,
    circulationSupply: totalSupply,
    totalSupply,
  };
};
