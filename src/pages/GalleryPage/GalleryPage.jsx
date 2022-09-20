import { useState } from 'react';
import { API } from '../../utils';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  GalleryForm,
  Loader,
  VotedGalleryList,
  Modal,
} from '../../components';
import { Section, Wrap } from './GalleryPage.styled';

export const GalleryPage = () => {
  const [images, setimages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onSubmit = async (breedId, limit, order, type) => {
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
        <CurrentPageNavigation
          currentPage={'gallery'}
          setIsOpenModal={setIsOpenModal}
        />
        <GalleryForm onSubmit={onSubmit} />
        {loading && images.length === 0 && <Loader />}
        <VotedGalleryList
          cats={images}
          action={addOrRemoveImg}
          ifForGallaryPage
        />
      </Wrap>
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
    </Section>
  );
};
