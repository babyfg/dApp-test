import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isWalletConnectModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsWalletConnectModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isWalletConnectModalOpen = action.payload;
    },
  },
});

export const { setIsWalletConnectModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
