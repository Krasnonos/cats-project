import {
  SearchBreedsInput,
  NavFavoriteCat,
  MainContentNav,
} from '../../components';
import { Section, HeadWrap, Wrap } from './VotingPage.styled';

export const VotingPage = () => {
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
