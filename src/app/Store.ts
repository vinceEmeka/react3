import { configureStore } from "@reduxjs/toolkit";
import  usersReducer  from "./UsersSlice"

export const Store = configureStore({
 reducer: {
  users: usersReducer,
 },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;