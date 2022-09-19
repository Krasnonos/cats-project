import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { API } from '../../utils';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
  BreedFullDescr,
  Loader,
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
        {isLoading && <Loader />}
        {images && <BreedFullDescr catsInfo={images} />}
      </Wrap>
    </Section>
  );
};
