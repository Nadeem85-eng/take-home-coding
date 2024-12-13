import { getMoviesByYear } from '../services/discoverMovie';
import axiosClient from '../utils/axiosClient';

jest.mock('../utils/axiosClient'); // Mock axiosClient

describe('getMoviesByYear', () => {


    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    
  it('fetches movies by year', async () => {
    const mockResponse = {
      data: {
        results: [
          {
            id: 1,
            title: 'Movie 1',
            release_date: '2019-01-01',
            vote_average: 7.5,
          },
        ],
      },
    };

    (axiosClient.get as jest.Mock).mockResolvedValue(mockResponse);

    const movies = await getMoviesByYear(2019);

    expect(movies).toEqual([
      {
        id: 1,
        title: 'Movie 1',
        release_date: '2019-01-01',
        vote_average: 7.5,
      },
    ]);
  });

  it('returns an empty array when there is an error', async () => {
    (axiosClient.get as jest.Mock).mockRejectedValue(new Error('API Error'));

    const movies = await getMoviesByYear(2019);

    expect(movies).toEqual([]);
  });
});
