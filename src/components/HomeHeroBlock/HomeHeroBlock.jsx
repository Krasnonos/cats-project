import homeImg from '../../image/home.png';
import { Background, BgImg } from './HomeHeroBlock.styled';

export const HomeHeroBlock = () => {
  return (
    <Background>
      <BgImg src={homeImg} alt="man and cat" />
    </Background>
  );
};
