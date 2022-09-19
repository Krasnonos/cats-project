import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API } from '../../utils';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  BreedFullDescr,
} from '../../components';
import { Section, Wrap } from './BreedDescrPage.styled';

export const BreedDescrPage = () => {
  const { breedId } = useParams();

  const { data: images, isLoading } = useQuery(
    ['breedDescr', breedId],
    API.searchCatsByBreeds,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'breeds'} breedId={breedId} />
        {images && <BreedFullDescr catsInfo={images} />}
      </Wrap>
    </Section>
  );
};
