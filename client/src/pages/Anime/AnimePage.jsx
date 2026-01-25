import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AnimeGrid from "./AnimeGrid";
import { useShopContext } from "../../context/shopcontext";
import { animeData } from "./AnimeData";

const AnimePage = () => {

  const navigate = useNavigate();
  const { userPreferences } = useShopContext();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([]);

  // Handle filter changes
  const handleFilterChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Go back to genres selection
  const handleBackToGenres = () => {
    navigate("/genres");
  };

  // Apply filters based on user preferences AND category selections
  useEffect(() => {

    let result = Array.isArray(animeData) ? [...animeData] : [];

    // 1️⃣ Filter by user's selected languages (future use)
    if (userPreferences.selectedLanguages?.length > 0) {
      console.log("Languages selected:", userPreferences.selectedLanguages);
    }

    // 2️⃣ Filter by selected categories (genres)
    if (selectedCategories.length > 0) {
      result = result.filter((a) =>
        selectedCategories.includes(a.category)
      );
    }

    // 3️⃣ Optional: Filter by mood
    if (userPreferences.selectedMood) {

      const moodToCategory = {
  "Need Motivation": [
    "Action",
    "Adventure",
    "Sports",
    "Biography",
    "Inspirational",
    "Success"
  ],

  "Feeling Low": [
    "Romance",
    "Comedy",
    "Drama",
    "Slice of Life"
  ],

  "Want Focus": [
    "Psychological",
    "Thriller",
    "Mystery",
    "Study",
    "Productivity"
  ],

  "Want Peace": [
    "Slice of Life",
    "Romance",
    "Feel Good",
    "Spiritual",
    "Nature"
  ],

  "Just for Fun": [
    "Comedy",
    "Parody",
    "Adventure",
    "Fantasy"
  ]
};

      const recommendedCategories =
        moodToCategory[userPreferences.selectedMood] || [];

      if (recommendedCategories.length > 0 && selectedCategories.length === 0) {
        result = result.filter((a) =>
          recommendedCategories.includes(a.category)
        );
      }
    }

    setFilteredAnime(result);

  }, [selectedCategories, userPreferences]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] to-[#0F172A] text-white">

      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold">
          Anime Recommendations
        </h1>

        <p className="text-white/60 mt-2 text-sm sm:text-base">
          Based on your preferences • {filteredAnime.length} anime found
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row p-4 sm:p-6 gap-4 sm:gap-6">

        {/* Grid */}
        <div className="flex-1 min-w-0">
          <AnimeGrid animes={filteredAnime} />
        </div>

      </div>

      {/* Mobile Preferences */}
      <div className="p-4 sm:p-6 border-t border-gray-700 md:hidden">

        <div className="flex flex-wrap gap-2">

          {userPreferences.selectedMood && (
            <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400 text-xs sm:text-sm">
              Mood: {userPreferences.selectedMood}
            </span>
          )}

          {userPreferences.selectedLanguages?.map((lang, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400 text-xs sm:text-sm"
            >
              {lang}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
};

export default AnimePage;
