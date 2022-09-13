import { useQuery } from '@tanstack/react-query';
import { Api } from '../utils/apiService';
const API = new Api();

export const useGetBreedsList = () => {
  const { data: breeds } = useQuery(['randomCat'], API.getBreeds, {
    retry: false,
    refetchOnWindowFocus: false,
  });
  return breeds;
};
