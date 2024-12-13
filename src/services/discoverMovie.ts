import axiosClient from '../utils/axiosClient';
import { Movie } from '../types/movie';

export async function getMoviesByYear(year: number, page: number = 1): Promise<Movie[]> {
    try {
        const response = await axiosClient.get('/discover/movie', {
            params: {
                language: 'en-US',
                primary_release_year: year,
                sort_by: 'popularity.desc',
                page,
            },
        });

        return response.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}
