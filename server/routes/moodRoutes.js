import express from "express";
import { searchVectorDB } from "../rag/query.js";

const router = express.Router();

/* -----------------------------------
   AI RECOMMENDATION ROUTE (HYBRID RAG)
----------------------------------- */

router.post("/recommend", async (req, res) => {
  try {

    const { mood, languages = [], category } = req.body;

    // Build semantic search query
    const searchQuery = `${mood} ${category}`;

    // Get similar docs from vector DB
    const docs = await searchVectorDB(searchQuery);

    // Convert to metadata objects
    let items = docs.map(d => d.metadata);

    /* -----------------------------
       STRICT LANGUAGE FILTER
    ----------------------------- */

    if (languages.length > 0) {
      items = items.filter(item =>
        languages.some(lang =>
          item.language
            ?.toLowerCase()
            .includes(lang.toLowerCase())
        )
      );
    }

    /* -----------------------------
       STRICT CATEGORY FILTER
    ----------------------------- */

    if (category) {
      items = items.filter(
        item =>
          item.category
            ?.toLowerCase() === category.toLowerCase()
      );
    }

    res.json({ recommendations: items });

  } catch (error) {
    console.error("AI Recommend Error:", error);
    res.status(500).json({ recommendations: [] });
  }
});

export default router;
