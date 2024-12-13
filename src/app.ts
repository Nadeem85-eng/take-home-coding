import express from 'express';
import moviesRouter from './routes/movies';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/movies', moviesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
