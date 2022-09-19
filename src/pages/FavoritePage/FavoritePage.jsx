import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  Loader,
  ActionHistoryList,
  VotedGalleryList,
} from '../../components';
import { API, addActionToHistory } from '../../utils';
import { Section, Wrap, ErrorMsg } from './FavoritePage.styled';

export const FavoritePage = () => {
  const [actions, setActions] = useState([]);
  const queryClient = useQueryClient();

  const { data: images, isLoading } = useQuery(
    ['favoritesCats'],
    API.getFavoritesCats,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading: isDeliting, mutate } = useMutation(API.delateFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries(['favoritesCats']);
    },
  });

  const removeImgFromFavorite = id => {
    addActionToHistory(id, setActions);
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
        <CurrentPageNavigation currentPage={'favorite'} />
        {isLoading && <Loader />}
        {images && (
          <VotedGalleryList
            cats={images}
            action={removeImgFromFavorite}
            isDeliting={isDeliting}
          />
        )}
        {images?.length === 0 && <ErrorMsg>No item found</ErrorMsg>}
        {actions && <ActionHistoryList actions={actions} remove={true} />}
      </Wrap>
    </Section>
  );
};
