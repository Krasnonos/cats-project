import {
  SearchBreedsInput,
  NavFavoriteCat,
  MainContentNav,
} from '../../components';
import { Section, HeadWrap, Wrap } from './BreedsPage.styled';

export const BreedsPage = () => {
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
