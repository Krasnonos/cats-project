import {
  SearchBreedsInput,
  NavFavoriteCat,
  CurrentPageNavigation,
  RandomCatForVote,
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
        <CurrentPageNavigation />
        <RandomCatForVote />
      </Wrap>
    </Section>
  );
};
