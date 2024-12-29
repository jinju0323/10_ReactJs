import { configureStore } from "@reduxjs/toolkit";

import SalesSlice from "./slices/SalesSlice";
import BestProductsSlice from "./slices/BestProductsSlice";

const store = configureStore({
  reducer: {
    SalesSlice,
    BestProductsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
