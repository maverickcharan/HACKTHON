const BookCard = ({ book }) => {

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:shadow-lg transition">

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-white mb-1">
        {book.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-300 mb-2">
        {book.description}
      </p>

      {/* META TAGS */}
      <div className="flex flex-wrap gap-2 text-xs">

        <span className="px-2 py-1 rounded bg-pink-500/20 text-pink-300">
          {book.language}
        </span>

        <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300">
          {book.mood}
        </span>

        <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300">
          {book.category}
        </span>

      </div>

    </div>
  );
};

export default BookCard;
