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
import { Section, Wrap, ErrorMsg } from './LikesPage.styled';

export const LikesPage = () => {
  const [actions, setActions] = useState([]);
  const queryClient = useQueryClient();

  const { isLoading, data: images } = useQuery(
    ['likesCats'],
    API.getVotedCats,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading: isDeliting, mutate } = useMutation(API.delateVotes, {
    onSuccess: () => {
      queryClient.invalidateQueries(['likesCats']);
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

  const sortedImages = images?.filter(({ value }) => value === 1);

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'likes'} />
        {isLoading && <Loader />}
        {sortedImages && (
          <VotedGalleryList
            cats={sortedImages}
            action={removeImgFromFavorite}
            isDeliting={isDeliting}
          />
        )}
        {sortedImages?.length === 0 && <ErrorMsg>No item found</ErrorMsg>}
        {actions && <ActionHistoryList actions={actions} remove={true} />}
      </Wrap>
    </Section>
  );
};
