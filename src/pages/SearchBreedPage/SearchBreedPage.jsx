import { useSelector } from 'react-redux';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  // Loader,
} from '../../components';
import {
  Section,
  Wrap,
  SearchedText,
  BreedName,
} from './SearchBreedPage.styled';

export const SearchBreedPage = () => {
  const { breedid, breedName } = useSelector(state => state.breed);

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'search'} />
        <SearchedText>
          Serch resaults for: <BreedName>{breedName}</BreedName>
        </SearchedText>
      </Wrap>
    </Section>
  );
};
