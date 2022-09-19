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
import { Section, Wrap, ErrorMsg } from './DislikesPage.styled';

export const DislikesPage = () => {
  const [actions, setActions] = useState([]);
  const queryClient = useQueryClient();

  const { isLoading, data: images } = useQuery(
    ['dislikesCats'],
    API.getVotedCats,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading: isDeliting, mutate } = useMutation(API.delateVotes, {
    onSuccess: () => {
      queryClient.invalidateQueries(['dislikesCats']);
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

  const sortedImages = images?.filter(({ value }) => value === 0);

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'dislikes'} />
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
