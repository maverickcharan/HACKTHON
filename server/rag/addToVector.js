import { Chroma } from "@langchain/community/vectorstores/chroma";
import { OllamaEmbeddings } from "@langchain/ollama";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function addToVectorDB(item) {
  try {
    const embeddings = new OllamaEmbeddings({
      model: "nomic-embed-text"
    });

    const vectorStore = await Chroma.fromExistingCollection(
      embeddings,
      {
        collectionName: "content-db-v2",
        persistDirectory: path.resolve(__dirname, "chroma")
      }
    );

    const doc = {
      pageContent: `${item.title}. ${item.description}. Mood:${item.mood}. Language:${item.language}. Category:${item.category}`,
      metadata: item
    };

    await vectorStore.addDocuments([doc]);

    console.log("✅ Added to Vector DB");
    return true;
  } catch (err) {
    console.error("Error adding to Vector DB:", err);
    return false;
  }
}