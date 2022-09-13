import {
  SearchBreedsInput,
  NavFavoriteCat,
  CurrentPageNavigation,
} from '../../components';
import { Section, HeadWrap, Wrap } from './GalleryPage.styled';

export const GalleryPage = () => {
  return (
    <Section>
      <HeadWrap>
        <SearchBreedsInput />
        <NavFavoriteCat />
      </HeadWrap>
      <Wrap>
        <CurrentPageNavigation currentPage={'gallery'} />
      </Wrap>
    </Section>
  );
};
