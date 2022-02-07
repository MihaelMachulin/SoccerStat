import { configureStore } from "@reduxjs/toolkit";
import { SoccerApi } from "../features/mainQuerySlice";
import findAndSortSlice from '../features/findAndSortSlice'

export const store = configureStore({
  reducer: {
    findAndSortSlice,
    [SoccerApi.reducerPath]: SoccerApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(SoccerApi.middleware)
})