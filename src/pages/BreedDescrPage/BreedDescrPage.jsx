import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { API } from '../../utils/apiService';
import {
  SearchBreedsInput,
  NavFavoriteCat,
  CurrentPageNavigation,
} from '../../components';
import { Section, HeadWrap, Wrap } from './BreedDescrPage.styled';

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
      <HeadWrap>
        <SearchBreedsInput />
        <NavFavoriteCat />
      </HeadWrap>
      <Wrap>
        <CurrentPageNavigation currentPage={'breeds'} breedId={breedId} />
      </Wrap>
    </Section>
  );
};
