import { configureStore } from "@reduxjs/toolkit";

import SalesSlice from "./slices/SalesSlice";
import BestProductsSlice from "./slices/BestProductsSlice";
import NewMemberSlice from "./slices/NewMemberSlice";

const store = configureStore({
  reducer: {
    SalesSlice,
    BestProductsSlice,
    NewMemberSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
