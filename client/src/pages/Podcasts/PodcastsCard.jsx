const PodcastsCard = ({ podcast }) => {

  // Convert YouTube link to embed link
  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("embed")) return url;

    const videoId = url.includes("youtu.be")
      ? url.split("youtu.be/")[1].split("?")[0]
      : url.split("v=")[1]?.split("&")[0];

    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">

      {/* YouTube Video */}
      <iframe
        className="h-32 w-full rounded mb-2"
        src={getEmbedUrl(podcast.youtubeUrl)}
        title={podcast.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h3 className="text-sm font-semibold text-white">
        {podcast.title}
      </h3>

      <p className="text-xs text-gray-400">
        {podcast.category}
      </p>
    </div>
  );
};

export default PodcastsCard;
