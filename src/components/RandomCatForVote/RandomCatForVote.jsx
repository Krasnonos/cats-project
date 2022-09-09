import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { VoteBtns } from '../VoteBtns/VoteBtns';
import { Loader } from '../Loader/Loader';
import { ActionHistoryList } from '../ActionHistoryList/ActionHistoryList';
import { ImgWrap, VoteCatImg, RelativeWrap } from './RandomCatForVote.styled';
import { Api } from '../../utils/apiService';

const API = new Api();

export const RandomCatForVote = () => {
  const [actions, setActions] = useState([]);

  const {
    data: randomCat,
    isLoading,
    refetch,
  } = useQuery(['randomCat'], API.getRandomCat, {
    retry: false,
    refetchOnWindowFocus: false,
  });

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
        await API.voting({ image_id: id, value: vote });
      } else {
        API.addCatToFavorite({ image_id: id });
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
                src={randomCat[0].url}
                alt={'cat' + randomCat[0].id}
              />
            </ImgWrap>
            <VoteBtns onVote={voteForCat} id={randomCat[0].id} />
          </>
        )}
      </RelativeWrap>
      {actions && <ActionHistoryList actions={actions} />}
    </>
  );
};
