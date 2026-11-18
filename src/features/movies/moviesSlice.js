import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, showMovie, addMovies, deleteMovie, updateMovies } from "../../services/moviesService";


/**INITIAL STATE */
const initialState = {
  items:[],
  current:null,
  loading:false,
  error:null,
}

/**SLICE */
const moviesSlice = createSlice({
  name:"movies",
  initialState:initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      /**FETCH MOVIES */
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })

      .addCase(fetchMovies.rejected, (state, action)=> {
        state.loading = false
        state.error = action.payload
      })
      
      /**SHOW MOVIE */
      .addCase(showMovie.pending, (state) => {
        state.loading = true;
        state.error = null
      })

      .addCase(showMovie.fulfilled, (state, action) => {
        state.loading = false
        state.current = action.payload
      })

      .addCase(showMovie.rejected, (state, action)=> {
        state.loading = false
        state.error = action.payload
      })

      /**ADD MOVIE */
      .addCase(addMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(addMovies.fulfilled, (state, action) =>{
        state.loading = false
        state.items =  [...state.items, action.payload]
      })

      .addCase(addMovies.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      /**UPDATE MOVIE  */
      .addCase(updateMovies.pending, (state) => {
        state.loading = true;
        state.error = null
      })

      .addCase(updateMovies.fulfilled, (state, action) => {
        state.loading = false
        state.items = state.items.map((m) => 
          m.id === action.payload.id ? action.payload:m
        )
      })

      .addCase(updateMovies.rejected, (state, action)=> {
        state.loading = false
        state.error = action.payload
      })

      /**DELETE MOVIE */
      .addCase(deleteMovie.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.loading = false
        state.items = state.items.filter((m) => m.id !== action.payload)
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
    }
})

export default moviesSlice.reducer





