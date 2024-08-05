import { UserOrderState } from "@/app/types/order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: UserOrderState = {
  coffeeStyle: null,
  size: null,
  extras: {
    sugar: "Normal",
    milk: "Cow",
  },
};

const userOrderSlice = createSlice({
  name: "userOrder",
  initialState,
  reducers: {
    setCoffeeStyle: (state, action: PayloadAction<string>) => {
      state.coffeeStyle = action.payload;
    },
    setSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
    setSugar: (state, action: PayloadAction<string>) => {
      state.extras.sugar = action.payload;
    },
    setMilk: (state, action: PayloadAction<string>) => {
      state.extras.milk = action.payload;
    },
    resetPreferences: () => initialState,
  },
});

// Export actions for use in components
export const { setCoffeeStyle, setSize, setSugar, setMilk, resetPreferences } =
  userOrderSlice.actions;

// Export reducer to add to the store
export default userOrderSlice.reducer;
