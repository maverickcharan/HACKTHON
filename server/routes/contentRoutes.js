import express from "express";
import axios from "axios";

const router = express.Router();

// Movies API
router.get("/movies", async (req, res) => {
    const { mood, language } = req.query;
    const apiKey = process.env.TMDB_API_KEY;

    // Mood to Genre mapping
    const moodMap = {
        'need motivation': 28,  // Action
        'feeling low': 18,      // Drama
        'want focus': 99,       // Documentary
        'want peace': 10749,    // Romance
        'just for fun': 35      // Comedy
    };

    // Language mapping
    const langMap = {
        'telugu': 'te',
        'hindi': 'hi',
        'english': 'en'
    };

    const genreId = moodMap[mood] || 28;
    const langCode = langMap[language] || 'en';

    try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=${langCode}`;
        const response = await axios.get(url);

        const movies = response.data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
            rating: movie.vote_average,
            description: movie.overview
        }));

        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});


// BOOKS API
router.get("/books", async (req, res) => {
    const { mood } = req.query;

    // Mood to book category
    const moodMap = {
        'need motivation': 'self_help',
        'feeling low': 'romance',
        'want peace': 'meditation',
        'just for fun': 'fiction'
    };

    const category = moodMap[mood] || 'popular';

    try {
        const response = await axios.get(
            `https://openlibrary.org/subjects/${category}.json?limit=10`
        );

        const books = response.data.works.map(book => ({
            id: book.key,
            title: book.title,
            author: book.authors?.[0]?.name || 'Unknown',
            category: category,
            cover: book.cover_id
                ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                : 'https://via.placeholder.com/150x200/374151/FFFFFF?text=Book'
        }));

        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

// ANIME API - Jikan (No Key Needed)
router.get("/anime", async (req, res) => {
    const { mood } = req.query;

    // Mood to anime genre mapping
    const moodToGenre = {
        'need motivation': 1,    // Action
        'feeling low': 8,       // Drama
        'want focus': 4,        // Comedy
        'want peace': 22,       // Romance
        'just for fun': 2       // Adventure
    };

    const genreId = moodToGenre[mood] || 1; // Default: Action

    try {
        const response = await axios.get(
            `https://api.jikan.moe/v4/anime?genres=${genreId}&order_by=popularity&limit=20`
        );

        // Format data for frontend
        const animeList = response.data.data.map(anime => ({
            id: anime.mal_id,
            title: anime.title,
            image: anime.images.jpg.image_url,
            rating: anime.score || 0,
            episodes: anime.episodes || 'Unknown',
            genre: getGenreName(genreId),
            mood: mood,
            synopsis: anime.synopsis || 'No description available'
        }));

        res.json(animeList);
    } catch (error) {
        console.error('Jikan API Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch anime' });
    }
});

// Helper function: Genre ID to name
function getGenreName(genreId) {
    const genres = {
        1: 'Action',
        2: 'Adventure',
        4: 'Comedy',
        8: 'Drama',
        22: 'Romance'
    };
    return genres[genreId] || 'Anime';
}


// WEB SERIES API - TMDB (Same API Key as Movies)
router.get("/webseries", async (req, res) => {
    const { mood, language } = req.query;
    const apiKey = process.env.TMDB_API_KEY; // మీకు ఇప్పటికే ఉంది

    // Mood to TV genre IDs
    const moodToGenre = {
        'need motivation': 10759, // Action & Adventure
        'feeling low': 18,        // Drama
        'want focus': 99,         // Documentary
        'want peace': 10751,      // Family
        'just for fun': 35        // Comedy
    };

    const langMap = {
        'telugu': 'te',
        'hindi': 'hi',
        'english': 'en'
    };

    const genreId = moodToGenre[mood] || 10759;
    const langCode = langMap[language] || 'en';

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${genreId}&language=${langCode}&sort_by=popularity.desc`
        );

        // Format data for frontend
        const webSeries = response.data.results.map(series => ({
            id: series.id,
            title: series.name,
            poster: series.poster_path
                ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
                : 'https://via.placeholder.com/300x450/0F766E/FFFFFF?text=Series',
            rating: series.vote_average,
            genre: getTVGenreName(genreId),
            mood: mood,
            description: series.overview,
            seasons: series.season_count || 1
        }));

        res.json(webSeries);
    } catch (error) {
        console.error('TMDB Web Series Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch web series' });
    }
});

// Helper function
function getTVGenreName(genreId) {
    const genres = {
        10759: 'Action & Adventure',
        18: 'Drama',
        99: 'Documentary',
        10751: 'Family',
        35: 'Comedy',
        80: 'Crime',
        10765: 'Sci-Fi & Fantasy'
    };
    return genres[genreId] || 'TV Series';
}


export default router;