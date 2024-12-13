import axiosClient from '../utils/axiosClient';  // Correct import path
import { getMovieCredits } from '../services/movieCredits';

// Mock axiosClient instead of default axios
jest.mock('../utils/axiosClient');  // Corrected mock path

describe('getMovieCredits', () => {

    
    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
  
    it('returns an empty array when the API fails', async () => {
      // Mock axiosClient.get to simulate an error
      (axiosClient.get as jest.Mock).mockRejectedValue(new Error('API Error'));
  
      const movieId = 123;
      const credits = await getMovieCredits(movieId);
  
      expect(credits).toEqual([]);  // Fallback value when the API fails
    });
  });
