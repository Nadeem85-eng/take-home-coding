import axiosClient from '../utils/axiosClient';

export async function getMovieCredits(movieId: number) {
    try {
        const response = await axiosClient.get(`/movie/${movieId}/credits`);
        return response.data.crew.filter((person: any) => person.job === 'Editor');
    } catch (error) {
        console.error(error);
        return [];
    }
}
