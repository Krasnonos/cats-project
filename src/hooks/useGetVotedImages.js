import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useGetVotedImages = async (API, query, isFiltred) => {
  const queryClient = useQueryClient();

  const { isLoading, data: images } = await useQuery([query], API, {
    refetchOnWindowFocus: false,
    onSuccess: res => {
      if (isFiltred) {
        console.log(res);
        res.filter(({ value }) => {
          return value === isFiltred.filter;
        });
      }
    },
  });

  const { isLoading: isDeliting, mutate } = useMutation(API.delateVotes, {
    onSuccess: () => {
      queryClient.invalidateQueries([query]);
    },
  });

  return { images, isLoading, isDeliting, mutate };
};
