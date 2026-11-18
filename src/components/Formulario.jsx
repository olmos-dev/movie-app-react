
import ButtonForm from "./ButtonForm"
import styles from "../components/Formulario.module.css";

export default function Formulario({handleSubmit, onSubmit, register, errors, categories, loading, catLoading, textButton}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          {...register("title")}
          className={errors.title ? styles.inputError : ""}
          placeholder="Nombre de la película"
        />
        {errors.title && (
          <p className={styles.errorMessage}>{errors.title.message}</p>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Año</label>
          <input
            type="number"
            {...register("year")}
            className={errors.year ? styles.inputError : ""}
            placeholder="1994"
          />
          {errors.year && (
            <p className={styles.errorMessage}>{errors.year.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Género</label>
          <select
            {...register("genre")}
            className={errors.genre ? styles.inputError : ""}
            disabled={catLoading}
          >
            <option value="">---</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.genre && (
            <p className={styles.errorMessage}>{errors.genre.message}</p>
          )}
        </div>
      </div>

      <div className="form-group">
        <label>Calificación (0-10)</label>
        <input
          type="number"
          step="0.1"
          {...register("rating")}
          className={errors.rating ? styles.inputError : ""}
        />
        {errors.rating && (
          <p className={styles.errorMessage}>{errors.rating.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>Descripción</label>
        <textarea
          {...register("description")}
          className={errors.description ? styles.inputError : ""}
          placeholder="Describe la película..."
          rows="4"
        />
        {errors.description && (
          <p className={styles.errorMessage}>{errors.description.message}</p>
        )}
      </div>

      <div className="form-group">
        <label>URL del póster (opcional)</label>
        <input
          type="url"
          {...register("poster")}
          className={errors.poster ? styles.inputError : ""}
          placeholder="https://..."
        />
        {errors.poster && (
          <p className={styles.errorMessage}>{errors.poster.message}</p>
        )}
      </div>

      <ButtonForm type="submit" loading={loading} className="button submit-button">
        {loading ? "procesando..." : textButton}
      </ButtonForm>

    </form>
  )
}
