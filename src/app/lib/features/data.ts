import { createSlice } from "@reduxjs/toolkit";

export const optionsDataSlice = createSlice({
  name: "counter",
  initialState: {
    value: { _id: "", name: "", sizes: [], extras: [] },
  },
  reducers: {
    update: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = optionsDataSlice.actions;

export default optionsDataSlice.reducer;
