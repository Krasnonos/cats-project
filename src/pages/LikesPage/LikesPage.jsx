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
import { Section, HeadWrap, Wrap, ErrorMsg } from './LikesPage.styled';

export const LikesPage = () => {
  const [catImages, setCatImages] = useState(null);
  const [actions, setActions] = useState([]);
  const queryClient = useQueryClient();

  const { isLoading } = useQuery(['likesCats'], API.getVotedCats, {
    refetchOnWindowFocus: false,
    onSuccess: res => {
      const response = res.filter(({ value }) => value === 0);
      setCatImages(response);
    },
  });

  const { isLoading: isDeliting, mutate } = useMutation(API.delateVotes, {
    onSuccess: () => {
      queryClient.invalidateQueries(['likesCats']);
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
      <HeadWrap>
        <SearchBreedsInput />
        <NavFavoriteCat />
      </HeadWrap>
      <Wrap>
        <CurrentPageNavigation currentPage={'likes'} />
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
