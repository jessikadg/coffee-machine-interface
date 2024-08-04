import { configureStore } from "@reduxjs/toolkit";
import { coffeeApi } from "../../api/coffeeApi";
import optionsDataSlice from "./features/data";
import userOrderSlice from "./features/order";

const store = configureStore({
  reducer: {
    [coffeeApi.reducerPath]: coffeeApi.reducer,
    userOrder: userOrderSlice,
    optionsData: optionsDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coffeeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
