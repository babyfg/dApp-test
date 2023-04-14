import { useEffect, useState } from 'react';

import { getFTMPriceFromCGC } from 'utils/coingecko';

const useTokenPrice = () => {
  const [tokenPrices, setTokenPrice] = useState({ FTM: 0 });

  const fetchTokenPrice = async () => {
    const ftmPrice = await getFTMPriceFromCGC();
    setTokenPrice({
      ...tokenPrices,
      FTM: ftmPrice,
    });
  };

  useEffect(() => {
    fetchTokenPrice();

    setTimeout(() => {
      fetchTokenPrice();
    }, 100000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { tokenPrices };
};

export default useTokenPrice;
