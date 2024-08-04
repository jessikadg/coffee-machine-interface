import { configureStore } from "@reduxjs/toolkit";
import { coffeeApi } from "../../api/coffeeApi";
import optionsDataSlice from "./features/data";

const store = configureStore({
  reducer: {
    [coffeeApi.reducerPath]: coffeeApi.reducer,
    optionsData: optionsDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coffeeApi.middleware),
});

export default store;
