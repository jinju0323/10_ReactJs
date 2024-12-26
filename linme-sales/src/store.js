import { configureStore } from "@reduxjs/toolkit";

import SalesSlice from "./slices/SalesSlice";

const store = configureStore({
  reducer: {
    SalesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
