import PodcastsCard from "./PodcastsCard";

const PodcastsGrid = ({ podcasts }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 p-4">
      {podcasts.map((podcast) => (
        <PodcastsCard
          key={podcast.title}
          podcast={podcast}
        />
      ))}
    </div>
  );
};

export default PodcastsGrid;
