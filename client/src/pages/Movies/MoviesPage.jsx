import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MoviesGrid from "./MoviesGrid";

import { useShopContext } from "../../context/shopcontext";
import { moviesData } from "./moviesData";

const MoviesPage = () => {
  const navigate = useNavigate();
  const { userPreferences } = useShopContext();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Handle category filter changes
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Go back to genres selection
  const handleBackToGenres = () => {
    navigate('/genres');
  };

  // Apply filters based on user preferences
  useEffect(() => {
    let result = [...moviesData];

    // 1. Filter by user's selected languages
    if (userPreferences.selectedLanguages && userPreferences.selectedLanguages.length > 0) {
      result = result.filter((movie) => {
        // If movie has no language property, show it
        if (!movie.language) return true;
        // Check if movie language matches any selected language
        return userPreferences.selectedLanguages.some(lang =>
          movie.language.toLowerCase().includes(lang.toLowerCase()) ||
          lang.toLowerCase().includes(movie.language.toLowerCase())
        );
      });
    }

    // 2. Filter by selected categories (genres)
    if (selectedCategories.length > 0) {
      result = result.filter(movie => selectedCategories.includes(movie.category));
    }

    // 3. Filter by mood
    if (userPreferences.selectedMood) {
      // Map mood to movie categories
      const moodToCategory = {
        "Need Motivation": [ "Dream Chasers",  "Never Give Up", "Rise to the Top", "Self Growth","Student & Career Struggles","Comeback Stories" ],

        "Feeling Low": [ "Comfort Watch", "Healing Stories", "Light Hearted", "Hope & Positivity" ],

        "Want Focus": [ "Mindset & Discipline", "Deep Work","Biopics","Documentary" ],

        "Want Peace": ["Feel Good", "Slow Life","Nature & Travel", "Spiritual" ],

        "Just for Fun": ["Comedy","Light Entertainment","Feel Good Fun", "Family Friendly" ]
      };
      const recommendedCategories = moodToCategory[userPreferences.selectedMood] || [];
      if (recommendedCategories.length > 0 && selectedCategories.length === 0) {
        // If no categories selected, suggest based on mood
        result = result.filter((movie) => recommendedCategories.includes(movie.category));
      }
    }

    setFilteredMovies(result);
  }, [selectedCategories, userPreferences]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1020] to-[#0F172A] text-white">
      {/* Header with Back Button */}
      <div className="p-6 border-b border-gray-700">

        <h1 className="text-2xl md:text-3xl font-bold">Movie Recommendations</h1>
        <p className="text-white/60 mt-2">
          Based on your preferences • {filteredMovies.length} movies found
        </p>
      </div>

      <div className="flex flex lg:flex-row p-6 gap-6">

        {/* Right Content */}
        <div className="flex-1">
          <MoviesGrid movies={filteredMovies} />
        </div>
      </div>

      {/* Mobile Preferences Display */}
      <div className="p-6 border-t border-gray-700 md:hidden">
        <div className="flex flex-wrap gap-2">
          {userPreferences.selectedMood && (
            <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400 text-sm">
              Mood: {userPreferences.selectedMood}
            </span>
          )}
          {userPreferences.selectedLanguages && userPreferences.selectedLanguages.map((lang, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400 text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;