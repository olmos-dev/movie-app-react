import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import { fetchMovies, deleteMovie  } from "../services/moviesService"
import MovieCard from "../components/MovieCard"
import ModalCardMovie from "../components/ModalCardMovie"
import toast from 'react-hot-toast';
import { FadeLoader } from "react-spinners";
import { PlusCircleIcon } from "@heroicons/react/16/solid"
import Swal from "sweetalert2"
import { useNavigate } from "react-router"


export default function MoviePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {items:movies, loading, error} = useSelector((state => state.movies))

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePosterClick = movie => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const handleMovieUpdateClick = id => {
    navigate(`/movies/${id}/edit`)
  }

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMovie(null); 
  };

  const handleDelete = async(id) => {
    const result = await Swal.fire({
      title: "¿Eliminar película?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      cancelButtonColor:"#0284c7",
      confirmButtonColor: "#7f1d1d",
    })

    if (!result.isConfirmed) return

    try {
      await dispatch(deleteMovie(id)).unwrap()
      toast.success("Película eliminada")
    } catch (error) {
      toast.error(`Error: ${error}`)
    }

  }

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  useEffect(() => {
    document.title = "🎬 MovieApp";
  }, []);

  useEffect(() => {
    if(error) toast.error(`Error ${error}`)
  }, [error])

  if (loading ) return <FadeLoader color="#5D3FD3" />

  if (error) return(
    <>
      <div className="message">
        <h2>Error al cargar las películas</h2>
        <p>{error}</p>
        <button className="btn-reload" onClick={() => dispatch(fetchMovies())}>
          Intentar nuevamente
        </button>
      </div>
    </>
  )

  return (
    <>
      <main className="container">
        <header className="page-header">
          <div>
            <span className="eyebrow">TU COLECCIÓN</span>
            <h1>Catálogo de películas</h1>
            <p>
              Explora nuestra colección de películas.
            </p>
          </div>
          <Link to="/movies/create" className="button">
            <PlusCircleIcon width={20} height={20}></PlusCircleIcon> Agregar película
          </Link>
        </header>

        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClickDelete={handleDelete} onClickUpdate={handleMovieUpdateClick} onPosterClick={handlePosterClick}/>
          ))}
        </div>
      </main>

      <ModalCardMovie
          movie={selectedMovie}
          open={modalOpen}
          onClose={handleCloseModal}
      />

    </>
  );
}
