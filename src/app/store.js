import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../features/pokemonSlice";
import findAndSortSlice from '../features/findAndSortSlice'

export const store = configureStore({
  reducer: {
    findAndSortSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(pokemonApi.middleware)
})