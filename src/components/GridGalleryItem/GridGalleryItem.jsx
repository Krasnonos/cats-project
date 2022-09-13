import { Item, CardImg, BtnOverlay, ImgBtn } from './GridGalleryItem.styled';

export const GelleryItem = ({ img }) => {
  return (
    <Item>
      <CardImg src={img.url} alt={img.breeds[0].name} loading="lazy"></CardImg>
      <BtnOverlay>
        <ImgBtn to={img.id}>{img.breeds[0].name}</ImgBtn>
      </BtnOverlay>
    </Item>
  );
};
