const DocumentaryCard = ({ doc }) => {

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:shadow-lg transition">

      {/* IMAGE */}
      {doc.image && (
        <img
          src={doc.image}
          alt={doc.title}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-white mb-1">
        {doc.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-300 mb-2">
        {doc.description}
      </p>

      {/* META TAGS */}


    </div>
  );
};

export default DocumentaryCard;
