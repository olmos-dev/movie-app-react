import { createAsyncThunk  } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3001/movies"

/**LIST MOVIES */
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies", 
  
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch(API_URL)

      if(!response.ok) throw new Error("Error to get movies")

      const data = await response.json()
      
      return data

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

/** SHOW MOVIE */
export const showMovie = createAsyncThunk(
  "movies/showMoview",

  async (id, {rejectWithValue}) =>{
    try {
      const response = await fetch (`${API_URL}/${id}`)
      
      if(!response.ok) throw new Error("Error to get a movie")
      
      const data = await response.json()
      console.log(data)
      return data

    } catch (error) {
        return rejectWithValue(error.message)
    }
   
  }
)

/**ADD MOVIE */
export const addMovies = createAsyncThunk(
  "movies/addMovie",

  async (newMovie, { rejectWithValue }) => {

    try {
      const response = await fetch(API_URL, {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      })
      
      if (!response.ok) throw new Error("Error to add movie")

      const data = await response.json();
      console.log(data)
      
      return data

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

/**UPDATE MOVIE */  
export const updateMovies = createAsyncThunk(
  "movies/updateMovies",
  async ({ id, ...updateMovie }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateMovie),
      })

      if (!response.ok) throw new Error("Error to update movie")

      const data = await response.json()
      console.log(data)

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)



/**DELETE MOVIE */
export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async(id, {rejectWithValue}) => {
    try {
      const response = await fetch(`${API_URL}/${id}`,{
        method:"DELETE"
      })

      if(!response.ok) throw new Error("Error to delete movie")

      return id

    } catch (error) {
      return rejectWithValue(error.message)      
    }
  }
)