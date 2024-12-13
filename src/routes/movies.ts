import { Router } from 'express';
import { getMoviesByYear } from '../services/discoverMovie';
import { getMovieCredits } from '../services/movieCredits';

const router = Router();

router.get('/:year', async (req, res) => {
    const { year } = req.params;
    const page = req.query.page ? parseInt(req.query.page as string) : 1;

    const movies = await getMoviesByYear(parseInt(year), page);

    const movieDetails = await Promise.all(
        movies.map(async (movie: any) => {
            const editors = await getMovieCredits(movie.id);
            return {
                title: movie.title,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                editors: editors.map((editor: any) => editor.name),
            };
        })
    );

    res.json(movieDetails);
});

export default router;
