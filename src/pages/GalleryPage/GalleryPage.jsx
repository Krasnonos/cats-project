import {
  SearchBreedsInput,
  NavFavoriteCat,
  MainContentNav,
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
        <MainContentNav />
      </Wrap>
    </Section>
  );
};
