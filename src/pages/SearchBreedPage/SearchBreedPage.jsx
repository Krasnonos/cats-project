import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  Gallery,
  // Loader,
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
  const { breedid, breedName } = useSelector(state => state.breed);

  const { data, isFetching, isPreviousData } = useQuery(
    ['searchedCats', breedid, page],
    () => API.getSearchedBreedCats(breedid, page),
    {
      keepPreviousData: true,
      onSuccess(res) {
        console.log('images', images);
        console.log('res', res);
        setImages(state => [...res, ...state]);
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
            loader={<h4>Loading...</h4>}
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
