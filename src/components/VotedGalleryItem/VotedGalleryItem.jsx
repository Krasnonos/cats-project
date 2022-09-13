import svg from '../../image/icons.svg';
import {
  Item,
  CardImg,
  BtnOverlay,
  ImgBtn,
  BtnSvg,
} from './VotedGalleryItem.styled';

export const VotedGalleryItem = ({ cat, action, isDeliting }) => {
  return (
    <Item>
      <CardImg src={cat.image?.url} alt={cat?.id} />
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
