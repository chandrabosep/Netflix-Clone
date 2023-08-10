const apikey = "9cf4706e0f51f7bc2cd94525d67f89e0";

const request = {
    fetchTrending: `/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apikey}&witg_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apikey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apikey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apikey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apikey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apikey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${apikey}&with_genres=99`,
};

export default request;