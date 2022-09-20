import { useState } from 'react';
import { API } from '../../utils';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  GalleryForm,
  Loader,
  VotedGalleryList,
} from '../../components';
import { Section, Wrap } from './GalleryPage.styled';

export const GalleryPage = () => {
  const [breedId, setBreedId] = useState(null);
  const [limit, setLimit] = useState('5');
  const [order, setOrder] = useState('rand');
  const [type, setType] = useState('jpg,png');
  const [images, setimages] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!breedId) {
      return;
    }
    setLoading(true);
    try {
      const res = await API.getCatsForGallery(order, type, breedId, limit);
      setimages(state => (state = [...state, ...res]));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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

  const addOrRemoveImg = async id => {
    try {
      const favoriteCats = await API.getFavoritesCats();
      const isFavorite = favoriteCats.find(({ image_id }) => image_id === id);

      if (isFavorite) {
        API.delateFavorite(isFavorite.id);
      } else {
        API.addCatToFavorite({ image_id: id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'gallery'} />
        <GalleryForm changeForm={changeForm} onSubmit={onSubmit} />
        {loading && images.length === 0 && <Loader />}
        <VotedGalleryList
          cats={images}
          action={addOrRemoveImg}
          ifForGallaryPage
        />
      </Wrap>
    </Section>
  );
};
