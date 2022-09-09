// import { useState } from 'react';
import {
  SearchBreedsInput,
  NavFavoriteCat,
  MainContentNav,
  BreedsForm,
} from '../../components';
import { Section, HeadWrap, FlexWrap, Wrap } from './BreedsPage.styled';

export const BreedsPage = () => {
  // const [breedId, setBreedId] = useState(null);
  // const [limit, setLimit] = useState(5);
  // const [page, setPage] = useState(0);
  // const [sort, setSort] = useState(1);
  // const [images, setImages] = useState([null]);

  const changeForm = e => {
    const { name, value } = e.currentTarget;
    //  this.setState({ [name]: value });

    if (name === 'breedId' || name === 'limit') {
      const listParent = e.currentTarget.closest('.listPerent');
      const firstEl = listParent.querySelector('.FirstItem');
      firstEl.innerHTML = e.target.textContent;
    }
  };

  return (
    <Section>
      <HeadWrap>
        <SearchBreedsInput />
        <NavFavoriteCat />
      </HeadWrap>
      <Wrap>
        <FlexWrap>
          <MainContentNav />
          <BreedsForm changeForm={changeForm} />
        </FlexWrap>
      </Wrap>
    </Section>
  );
};
