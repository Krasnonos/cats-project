import { useQuery } from '@tanstack/react-query';
import { API } from '../utils/apiService';

export const useGetBreedsList = () => {
  const { data: breeds } = useQuery(['randomCat'], API.getBreeds, {
    retry: false,
    refetchOnWindowFocus: false,
  });
  return breeds;
};
