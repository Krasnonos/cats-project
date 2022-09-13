import svg from '../../image/icons.svg';
import { NavList, Link, BtnSvg } from './NavFavoriteCats.styled';

export const NavFavoriteCat = () => {
  return (
    <NavList>
      <Link to={'/likes'}>
        <BtnSvg width="30" height="30">
          <use href={`${svg}#icon-likeRed`}></use>
        </BtnSvg>
      </Link>
      <Link to={'/favorites'}>
        <BtnSvg width="30" height="30">
          <use href={`${svg}#icon-favL`}></use>
        </BtnSvg>
      </Link>
      <Link to={'/dislikes'}>
        <BtnSvg width="30" height="30">
          <use href={`${svg}#icon-dislikeRedL`}></use>
        </BtnSvg>
      </Link>
    </NavList>
  );
};
