import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { VoteBtns, Loader, ActionHistoryList } from '../';
import { ImgWrap, VoteCatImg, RelativeWrap } from './RandomCatForVote.styled';
import { API } from '../../utils';

export const RandomCatForVote = () => {
  const [actions, setActions] = useState([]);

  const {
    data: randomCat,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(['randomCat'], API.getRandomCat);

  const voteMutation = useMutation(API.voting);
  const addFevoriteMutation = useMutation(API.addCatToFavorite);

  const voteForCat = async (id, vote) => {
    setActions(state => [
      ...state,
      {
        id,
        vote,
        time: Date.now(),
      },
    ]);

    try {
      refetch('randomCat');
      if (vote === 1 || vote === 0) {
        voteMutation.mutate({ image_id: id, value: vote });
      } else {
        addFevoriteMutation.mutate({ image_id: id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RelativeWrap>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ImgWrap>
              <VoteCatImg
                src={randomCat[0]?.url}
                alt={'cat' + randomCat[0]?.id}
              />
            </ImgWrap>
            <VoteBtns
              onVote={voteForCat}
              id={randomCat[0]?.id}
              isFetching={isFetching}
            />
          </>
        )}
      </RelativeWrap>
      {actions && <ActionHistoryList actions={actions} />}
    </>
  );
};
