import * as yup from "yup";

export const movieSchema = yup.object({
  title: yup.string().required("El título es obligatorio"),
  year: yup
    .number()
    .typeError("El año debe ser un número")
    .required("El año es obligatorio")
    .min(1888, "Año no válido")
    .max(2100, "Año no válido"),
  genre: yup.string().required("Debes seleccionar un género"),
  rating: yup
    .number()
    .typeError("La calificación debe ser un número")
    .required("La calificación es obligatoria")
    .min(0, "Mínimo 0")
    .max(10, "Máximo 10"),
  description: yup.string().required("La descripción es obligatoria"),
  poster: yup.string().url("Debe ser una URL válida").notRequired(), // Opcional
});
