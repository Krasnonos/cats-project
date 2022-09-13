import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  SearchBreedsInput,
  NavFavoriteCat,
  CurrentPageNavigation,
  Loader,
  ActionHistoryList,
  VotedGalleryList,
} from '../../components';
import { API } from '../../utils/apiService';
import { Section, HeadWrap, Wrap, ErrorMsg } from './FavoritePage.styled';

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
    setActions(state => [
      ...state,
      {
        id,
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
      <HeadWrap>
        <SearchBreedsInput />
        <NavFavoriteCat />
      </HeadWrap>
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
