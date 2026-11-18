import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";

function MovieCard({ movie, onClickUpdate, onClickDelete, onPosterClick, }) {
  return (
    <article className="movie-card">
      {movie.poster ? (
        <img
          src={movie.poster}
          alt={`Póster de ${movie.title}`}
          className="movie-poster"
          onClick={() => onPosterClick(movie)}
        />
      ) : (
        <div className="poster-placeholder" onClick={() => onPosterClick(movie)}>
          Sin póster
        </div>
      )}

      <div className="movie-content">
        <h3>{movie.title}</h3>
        <p className="movie-meta">
          {movie.year} · {movie.genre}
        </p>
        
        <span className="rating">
          ⭐ {movie.rating}
        </span>
      </div>

       <div className="movie-actions">
           <button className="button button-danger" onClick={() => onClickDelete(movie.id)}>
            <TrashIcon width={20} height={20}></TrashIcon>
          </button>
           <button className="button button-purple" onClick={() => onClickUpdate(movie.id)} >
            <PencilSquareIcon width={20} height={20}></PencilSquareIcon>
          </button>
        </div>

    </article>
  );
}

export default MovieCard;