import { Item, CardImg, BtnOverlay, ImgBtn } from './GalleryItem.styled';

export const GelleryItem = ({ img }) => {
  return (
    <Item>
      <CardImg src={img.url} alt={img.breeds[0].name} loading="lazy"></CardImg>
      <BtnOverlay>
        <ImgBtn to={img.breeds[0].id}>{img.breeds[0].name}</ImgBtn>
      </BtnOverlay>
    </Item>
  );
};
