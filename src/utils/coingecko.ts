/* eslint-disable no-console */
import axios from 'axios';

export const getTokenIdFromCGC = (tokenSymbol: string): string => {
  if (tokenSymbol === 'FTM') return 'fantom';

  return 'fantom';
};

const getTokenPriceFromCGC = async (tokenId: string): Promise<number> => {
  if (!tokenId) return 0;
  const cgcUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`;
  try {
    const res = await axios.get(cgcUrl);
    if (res.status === 200) {
      return res.data[tokenId].usd;
    }
  } catch (err) {
    console.log('Coingecko token price fetch error: ', err);
    return 0;
  }

  return 0;
};

export const getFTMPriceFromCGC = async (): Promise<number> => getTokenPriceFromCGC(getTokenIdFromCGC('FTM'));
