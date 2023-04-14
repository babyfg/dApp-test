import { createSlice } from '@reduxjs/toolkit';

import { fetchGlobalTokenData } from './fetchGlobalToken';

interface LendsState {
  buyTax: number;
  sellTax: number;
  price: number;
  circulationSupply: number;
  totalSupply: number;
}

const initialState: LendsState = {
  buyTax: 0,
  sellTax: 0,
  price: 0.22,
  circulationSupply: 100,
  totalSupply: 100,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    reset: (state) => {
      state.buyTax = 0;
      state.sellTax = 0;
      state.price = 0;
      state.circulationSupply = 0;
      state.totalSupply = 0;
    },

    setTokenGlobalData: (state, action) => {
      state.buyTax = action.payload.buyTax;
      state.sellTax = action.payload.sellTax;
      state.price = action.payload.price;
      state.circulationSupply = action.payload.circulationSupply;
      state.totalSupply = action.payload.totalSupply;
    },
  },
});

export const { reset, setTokenGlobalData } = tokenSlice.actions;

// fetch global token info
export const fetchTokenGlobalDataAsync =
  () =>
  async (dispatch: any): Promise<void> => {
    const { buyTax, sellTax, price, circulationSupply, totalSupply } = await fetchGlobalTokenData();

    dispatch(
      setTokenGlobalData({
        buyTax,
        sellTax,
        price,
        circulationSupply,
        totalSupply,
      })
    );
  };

export default tokenSlice.reducer;
