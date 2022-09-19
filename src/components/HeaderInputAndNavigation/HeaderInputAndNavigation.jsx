import { SearchBreedsInput, NavFavoriteCat } from '../';
import { HeadWrap } from './HeaderInputAndNavigation';

export const HeaderInputAndNavigation = () => {
  return (
    <HeadWrap>
      <SearchBreedsInput />
      <NavFavoriteCat />
    </HeadWrap>
  );
};
