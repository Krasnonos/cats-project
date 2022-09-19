import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com';
const API_KEY = '29fa3a0d-cc24-4807-8889-3bc49f02b0f7';

export const API = {
  async getRandomCat() {
    const result = await axios(`v1/images/search?api_key=${API_KEY}`);
    return result.data;
  },

  async voting(id) {
    const result = await axios.post(`v1/votes?api_key=${API_KEY}`, id);
    return result.data;
  },

  async addCatToFavorite(id) {
    const result = await axios.post(`v1/favourites?api_key=${API_KEY}`, id);
    return result.data;
  },

  async getBreeds() {
    const result = await axios(`v1/breeds?api_key=${API_KEY}`);
    return result.data;
  },

  async getCatsByBreedsFilter(limit, breedId) {
    const result = await axios(
      `/v1/images/search?breed_id=${breedId}&limit=${limit}&page='1'&api_key=${API_KEY}`
    );
    return result.data;
  },

  async searchCatsByBreeds({ queryKey }) {
    const result = await axios(
      `/v1/images/search?breed_id=${queryKey[1]}&limit=5&page=0&api_key=${API_KEY}`
    );
    return result.data;
  },

  async getSearchedBreedCats(breedid, page) {
    console.log(breedid, page);
    const result = await axios(
      `/v1/images/search?breed_id=abob&limit=5&page=0&api_key=${API_KEY}`
    );
    return result.data;
  },

  async getVotedCats() {
    const result = await axios(`/v1/votes?&api_key=${API_KEY}`);
    return result.data;
  },

  async getFavoritesCats() {
    const result = await axios(`/v1/favourites?api_key=${API_KEY}`);
    return result.data;
  },

  async getCatImagesById(id) {
    const result = await axios(`/v1/images/${id}?api_key=${API_KEY}`);
    return result.data;
  },

  async delateVotes(id) {
    const result = await axios.delete(`/v1/votes/${id}?api_key=${API_KEY}`);
    return result.data;
  },

  async delateFavorite(id) {
    const result = await axios.delete(
      `/v1/favourites/${id}?api_key=${API_KEY}`
    );
    return result.data;
  },

  async getCatsForGallery(order, type, breed, limit) {
    const result = await axios(
      `/v1/images/search?breed_id=${breed}&mime_types=${type}&limit=${limit}&order=${order}&api_key=${API_KEY}`
    );
    return result.data;
  },
};
