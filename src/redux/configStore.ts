import { configureStore } from "@reduxjs/toolkit";
import travelReducer from "./reducers/travelReducer";
export const store = configureStore({
  reducer: {
    travelReducer: travelReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
