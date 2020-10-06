const API_KEY = "6ad13d95e8db0d720b9af75b1be93691"


const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
}

export default requests;