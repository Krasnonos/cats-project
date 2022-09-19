import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { API } from '../../utils/apiService';
import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
} from '../../components';
import { Section, Wrap } from './BreedDescrPage.styled';

export const BreedDescrPage = () => {
  const { breedId } = useParams();
  // console.log(breedId);

  // const { data, isLoading } = useQuery(
  //   ['breedDescr'],
  //   API.getCatImagesById(breedId),
  //   {
  //     refetchOnWindowFocus: false,
  //   }
  // );
  // console.log(data);

  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'breeds'} breedId={breedId} />
      </Wrap>
    </Section>
  );
};
