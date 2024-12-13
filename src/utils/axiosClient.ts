import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const axiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        'Content-Type': 'application/json',
    },
});

export default axiosClient;

