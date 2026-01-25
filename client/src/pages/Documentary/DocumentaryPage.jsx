import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DocumentaryGrid from "./DocumentaryGrid";

import { useShopContext } from "../../context/shopcontext";
import { DocumentaryData } from "./DocumentaryData";

const DocumentaryPage = () => {

    const navigate = useNavigate();
    const { userPreferences } = useShopContext();

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredDocs, setFilteredDocs] = useState([]);

    // Go back to genres page
    const handleBackToGenres = () => {
        navigate("/genres");
    };

    // Apply filters
    useEffect(() => {

        let result = Array.isArray(DocumentaryData)
            ? [...DocumentaryData]
            : [];

        // 1️⃣ Filter by Language
        if (userPreferences.selectedLanguages?.length > 0) {
            result = result.filter((doc) => {
                if (!doc.language) return true;

                return userPreferences.selectedLanguages.some(
                    (lang) =>
                        doc.language.toLowerCase().includes(lang.toLowerCase()) ||
                        lang.toLowerCase().includes(doc.language.toLowerCase())
                );
            });
        }

        // 2️⃣ Filter by Mood
        if (userPreferences.selectedMood) {

            const moodToCategory = {
                "Need Motivation": [
                    "Motivation",
                    "Self Growth",
                    "Business",
                    "Entrepreneurship",
                    "Inspiration"
                ],

                "Feeling Low": [
                    "Life Balance",
                    "Mental Health",
                    "Wellness",
                    "Hope",
                    "Positivity"
                ],

                "Want Focus": [
                    "Technology",
                    "Artificial Intelligence",
                    "Science",
                    "Business Tech",
                    "Cyber Security"
                ],

                "Want Peace": [
                    "Nature",
                    "Meditation",
                    "Relaxation",
                    "Spiritual",
                    "Travel"
                ],

                "Just for Fun": [
                    "Comedy",
                    "Entertainment",
                    "Gaming",
                    "Film Making"
                ]
            };

            const recommendedCategories =
                moodToCategory[userPreferences.selectedMood] || [];

            if (recommendedCategories.length > 0) {
                result = result.filter((doc) =>
                    recommendedCategories.includes(doc.category)
                );
            }
        }

        setFilteredDocs(result);

    }, [userPreferences, DocumentaryData]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B1020] to-[#0F172A] text-white">

            {/* Header */}
            <div className="p-6 border-b border-gray-700 flex items-center gap-4">

                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Documentary Recommendations
                    </h1>

                    <p className="text-white/60 mt-1">
                        Based on your preferences • {filteredDocs.length} documentaries found
                    </p>
                </div>

            </div>

            {/* Content */}
            <div className="p-6">
                <DocumentaryGrid documentaries={filteredDocs} />
            </div>

            {/* Mobile Preferences */}
            <div className="p-6 border-t border-gray-700 md:hidden">

                <div className="flex flex-wrap gap-2">

                    {userPreferences.selectedMood && (
                        <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400 text-sm">
                            Mood: {userPreferences.selectedMood}
                        </span>
                    )}

                    {userPreferences.selectedLanguages?.map((lang, index) => (
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

export default DocumentaryPage;
