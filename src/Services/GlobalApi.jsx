import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3'
const api_key = '4a42ee882672d685917fa9cfe29d1c63'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';


// https://api.themoviedb.org/3/trending/all/day?api_key=4a42ee882672d685917fa9cfe29d1c63

const getTrendingVideos = axios.get(movieBaseURL+'/trending/all/day?api_key='+api_key);

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default { getTrendingVideos, getMovieByGenreId }