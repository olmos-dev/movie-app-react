import { createAsyncThunk } from "@reduxjs/toolkit";

//const API_URL = "http://localhost:3001/categories"
const API_URL = "https://api-movie-app-react.onrender.com/categories"

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Error al obtener las categorías");
      const data = await response.json()
      return data
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);