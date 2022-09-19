import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  RandomCatForVote,
} from '../../components';
import { Section, Wrap } from './VotingPage.styled';

export const VotingPage = () => {
  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'voting'} />
        <RandomCatForVote />
      </Wrap>
    </Section>
  );
};
