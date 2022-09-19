import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  Loader,
  ActionHistoryList,
  VotedGalleryList,
} from '../../components';
import { API } from '../../utils/apiService';
import { Section, Wrap, ErrorMsg } from './DislikesPage.styled';

export const DislikesPage = () => {
  const [catImages, setCatImages] = useState(null);
  const [actions, setActions] = useState([]);
  const queryClient = useQueryClient();

  const { isLoading } = useQuery(['dislikesCats'], API.getVotedCats, {
    refetchOnWindowFocus: false,
    onSuccess: res => {
      const response = res.filter(({ value }) => value === 1);
      setCatImages(response);
    },
  });

  const { isLoading: isDeliting, mutate } = useMutation(API.delateVotes, {
    onSuccess: () => {
      queryClient.invalidateQueries(['dislikesCats']);
    },
  });

  const removeImgFromFavorite = id => {
    setActions(state => [
      ...state,
      {
        id,
        vote: 0,
        time: Date.now(),
      },
    ]);
    try {
      mutate(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'dislikes'} />
        {isLoading && <Loader />}
        {catImages && (
          <VotedGalleryList
            cats={catImages}
            action={removeImgFromFavorite}
            isDeliting={isDeliting}
          />
        )}
        {catImages?.length === 0 && <ErrorMsg>No item found</ErrorMsg>}
        {actions && <ActionHistoryList actions={actions} remove={true} />}
      </Wrap>
    </Section>
  );
};
