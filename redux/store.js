import { configureStore } from "@reduxjs/toolkit";
import claimReducer from "./features/claimslice";
import authslice from "./features/authslice";

export const store = configureStore({
  reducer: {
    claim: claimReducer,
    auth: authslice,
  },
});
