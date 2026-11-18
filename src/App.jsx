import { Routes, Route, Navigate } from "react-router"
import Navbar from "./components/Navbar"
import MoviesPage from "./pages/MoviePage"
import AddMoviePage from "./pages/AddMoviePage"
import NotFoundPage from "./pages/NotFoundPage"
import UpdateMoviePage from "./pages/UpdateMoviePage"

import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />}></Route>
        <Route path="/movies" element={<MoviesPage/>}></Route>
        <Route path="/movies/create" element={<AddMoviePage/>}></Route>
        <Route path="/movies/:id/edit" element={<UpdateMoviePage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
