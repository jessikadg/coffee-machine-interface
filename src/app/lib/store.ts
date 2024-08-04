import { configureStore } from "@reduxjs/toolkit";
import optionsDataSlice from "./features/data";

export default configureStore({
  reducer: {
    optionsData: optionsDataSlice,
  },
});
