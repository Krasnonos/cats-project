import { useState, useEffect } from 'react';
import { API } from '../../utils/apiService';
// import { getUniqImages } from '../../utils/getUniqImages';
import { SortImg } from '../../utils/sortImages';
import {
  SearchBreedsInput,
  NavFavoriteCat,
  CurrentPageNavigation,
  BreedsForm,
  Gallery,
  Loader,
} from '../../components';
import { Section, HeadWrap, FlexWrap, Wrap } from './BreedsPage.styled';

export const BreedsPage = () => {
  const [breedId, setBreedId] = useState(null);
  const [limit, setLimit] = useState('5');
  const [sort, setSort] = useState(0);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!breedId) {
      return;
    }
    setLoading(true);
    API.getCatsByBreedsFilter(limit, breedId)
      .then(response => {
        setImages(state => {
          return (state = [...state, ...response]);
        });
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [breedId, limit]);

  const changeForm = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'breedId':
        setBreedId(value);
        break;
      case 'limit':
        setLimit(value);
        break;
      default:
        break;
    }

    const listParent = e.currentTarget.closest('.listPerent');
    const firstEl = listParent.querySelector('.FirstItem');
    firstEl.innerHTML = e.target.textContent;
  };

  const sortedCatImages = SortImg(images, sort);

  return (
    <Section>
      <HeadWrap>
        <SearchBreedsInput />
        <NavFavoriteCat />
      </HeadWrap>
      <Wrap>
        <FlexWrap>
          <CurrentPageNavigation />
          <BreedsForm changeForm={changeForm} setSort={setSort} />
        </FlexWrap>
        {loading && !breedId && <Loader />}
        {sortedCatImages.length > 0 && <Gallery images={sortedCatImages} />}
      </Wrap>
    </Section>
  );
};
