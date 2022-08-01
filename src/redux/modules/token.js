import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const tokenSLice = createSlice({
  name: 'token',
  initialState: initialState,
  reducers: {
    tokenAdd: (state, action) => ({
      token: action.payload,
    }),
    removeToken: () => initialState,
  },
});

export const { tokenAdd, removeToken } = tokenSLice.actions;
export default tokenSLice.reducer;
