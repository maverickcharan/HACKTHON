const MovieCard = ({ movie }) => {

  return (
    <div className="border rounded-lg p-4 shadow bg-gray-900 hover:shadow-lg transition">
      <img
        src={movie.image || movie.imageUrl}
        alt={movie.title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-white mb-1">
        {movie.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-300 mb-2">
        {movie.description}
      </p>

      {/* META INFO */}

    </div>
  );
};

export default MovieCard;
