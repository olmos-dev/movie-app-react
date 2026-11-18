import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { addMovies } from "../services/moviesService";
import { fetchCategories } from "../services/categoriesService";

import {movieSchema} from "../features/movies/movieSchema"
import GoBack from "../components/GoBack";
import Formulario from "../components/Formulario";
 
export default function AddMoviePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.movies);
  const { items: categories, loading: catLoading } = useSelector(
    (state) => state.categories
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(movieSchema),
    mode: "onChange",
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    document.title = "🎬 MovieApp - Agregar Película";
  }, []);


  const onSubmit = async (data) => {
    // data ya viene validado y con los tipos correctos (year/rating como números)
    try {
      await dispatch(addMovies(data)).unwrap();
      toast.success("Película agregada correctamente");
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
          <span className="eyebrow">NUEVO REGISTRO</span>
        </div>

        <h1>Agregar película 🎬</h1>
        <p>Completa los datos de la película.</p>

         <Formulario   
          handleSubmit={handleSubmit} 
          onSubmit={onSubmit} 
          register={register}
          errors={errors}
          categories = {categories}
          loading={loading}
          catLoading={catLoading}
          textButton = "Guardar Película"
        />
        
      </div>
    </main>
  );
}