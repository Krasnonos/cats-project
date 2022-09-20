import { useState } from 'react';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  GalleryForm,
  // VotedGalleryList,
} from '../../components';
import { Section, Wrap } from './GalleryPage.styled';

export const GalleryPage = () => {
  const [breedId, setBreedId] = useState(null);
  const [limit, setLimit] = useState('5');
  const [order, setOrder] = useState('rand');
  const [type, setType] = useState('jpg,png');

  const onSubmit = () => {
    if (!breedId) {
      return;
    }
    console.log(breedId, limit, order, type);
  };

  const changeForm = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'breedId':
        setBreedId(value);
        break;
      case 'limit':
        setLimit(value);
        break;
      case 'order':
        setOrder(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        break;
    }

    const listParent = e.currentTarget.closest('.listPerent');
    const firstEl = listParent.querySelector('.FirstItem');
    firstEl.innerHTML = e.target.textContent;
  };

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'gallery'} />
        <GalleryForm changeForm={changeForm} onSubmit={onSubmit} />
        {/* <VotedGalleryList cats={images}/> */}
      </Wrap>
    </Section>
  );
};
