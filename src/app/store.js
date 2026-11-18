import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "../features/movies/moviesSlice";
import categoriesReducer from "../features/categories/categoriesSlice"


export const store = configureStore({
  reducer:{
    movies: moviesReducer,
    categories: categoriesReducer
  }
})