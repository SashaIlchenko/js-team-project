import axios from 'axios';
import { onSpinnerDisabled, onSpinnerEnabled } from './loader-spinner';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e8d94f3e976148bda0a5c640d4df112b';

export async function getTrendMovies() {
    try {
        onSpinnerEnabled();
        const response = await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
        onSpinnerDisabled();
        return response.data;

    } 
    catch (err) {
        console.log(err);
    }
}

export async function getGenresMovies() {
    try {
      onSpinnerEnabled();
        const response = await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`);
        onSpinnerDisabled();
        // console.log(response.data.genres)
        return response.data.genres;
    }
    catch (err) { 
        console.log(err);
    }
}

export async function getQueryMovies(userQuery, qPage=1) {
    try {
        const response = await axios.get(`${BASE_URL}search/movie`, {
            params: { 
                api_key: API_KEY,
                query: userQuery,
                // accepts requested page as qPage, defaults to 1st page if none provided
                page: qPage,
                include_adult: "false",
            }
        });

        return response.data;
    }
    catch (err) { 
        console.log(err);
    }
}
