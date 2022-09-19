import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  Gallery,
  Loader,
} from '../../components';
import { API } from '../../utils';
import {
  Section,
  Wrap,
  SearchedText,
  BreedName,
} from './SearchBreedPage.styled';

export const SearchBreedPage = () => {
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const { breedId, breedName } = useSelector(state => state.breed);

  const { data, isFetching, isPreviousData } = useQuery(
    ['searchedCats', breedId, page],
    () => API.getSearchedBreedCats(breedId, page),
    {
      keepPreviousData: true,
      onSuccess(res) {
        setImages(state => [...state, ...res]);
      },
    }
  );

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'search'} />
        <SearchedText>
          Serch resaults for: <BreedName>{breedName}</BreedName>
        </SearchedText>
        {images.length > 0 && (
          <InfiniteScroll
            dataLength={images.length} //This is important field to render the next data
            next={() => setPage(state => (state = state + 1))}
            hasMore={true}
            loader={<Loader />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Gallery images={images} />
          </InfiniteScroll>
        )}
      </Wrap>
    </Section>
  );
};
