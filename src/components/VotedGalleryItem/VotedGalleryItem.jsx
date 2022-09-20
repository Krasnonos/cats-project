import svg from '../../image/icons.svg';
import {
  Item,
  CardImg,
  BtnOverlay,
  ImgBtn,
  BtnSvg,
} from './VotedGalleryItem.styled';

export const VotedGalleryItem = ({
  cat,
  action,
  isDeliting,
  ifForGallaryPage,
}) => {
  const imgSrc = ifForGallaryPage ? cat.url : cat.image?.url;

  return (
    <Item>
      <CardImg src={imgSrc} alt={cat?.id} />
      <BtnOverlay>
        <ImgBtn
          type="button "
          onClick={() => action(cat.id)}
          disabled={isDeliting}
        >
          <BtnSvg width="20" height="20">
            <use href={`${svg}#${'icon-favRed'}`}></use>
          </BtnSvg>
        </ImgBtn>
      </BtnOverlay>
    </Item>
  );
};
