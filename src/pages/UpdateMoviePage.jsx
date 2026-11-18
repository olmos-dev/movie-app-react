import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { updateMovies,  showMovie } from "../services/moviesService";
import { fetchCategories } from "../services/categoriesService";
import {movieSchema} from "../features/movies/movieSchema"
import { useParams } from "react-router";
import GoBack from "../components/GoBack";
import Formulario from "../components/Formulario"
 
export default function UpdateMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { current, loading } = useSelector((state) => state.movies);
  
  const { items: categories, loading: catLoading } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(showMovie(id));
  },[dispatch, id])

  useEffect(() => {
    document.title = "🎬 MovieApp - Editar Película";
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(movieSchema),
    mode: "onChange", // Valida al salir del campo (mejor UX)
  });

  useEffect(() => {
    if (current) {
      reset({
        title: current.title,
        year:current.year,
        genre:current.genre,
        rating: current.rating,
        description: current.description,
        poster: current.poster,
      });
    }
  }, [current, reset]);

  const onSubmit = async (data) => {
    // data ya viene validado y con los tipos correctos (year/rating como números)
    try {
      await dispatch(updateMovies({id, ...data})).unwrap();
      toast.success("Película actualizada correctamente");
      navigate("/movies");
    } catch (error) {
      toast.error(`Error ${error}`);
    }
  };

  return (
    <main className="container">
      <div className="form-container">
        <div className="form-header">
          <GoBack/>
          <span className="eyebrow">ACTUALIZAR REGISTRO</span>
        </div>
        <h1>Editar película 🎬</h1>
        <p>Edita los datos de la película.</p>

        <Formulario   
          handleSubmit={handleSubmit} 
          onSubmit={onSubmit} 
          register={register}
          errors={errors}
          categories = {categories}
          loading={loading}
          catLoading={catLoading}
          textButton = "Editar Película"
        />

      </div>
    </main>
  );
}