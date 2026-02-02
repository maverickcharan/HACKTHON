import DocumentaryCard from "./DocumentaryCard";

const DocumentaryGrid = ({ documentaries }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 p-4">
      {documentaries.map((doc) => (
        <DocumentaryCard
          key={doc.title}
          doc={doc}
        />
      ))}
    </div>
  );
};

export default DocumentaryGrid;
