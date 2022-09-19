import { getNormalizedCatInfo } from '../../utils';
import {
  DescrWrap,
  TitleBreed,
  BreedText,
  FlexWrap,
  TemperamentWrap,
  AddWrap,
  PropertyTitle,
  PropertyDescr,
} from './CatsTextDescr.styled';

export const CatsTextDescr = ({ catsInfo }) => {
  const { name, description, temperament, origin, weight, lifeSpan } =
    getNormalizedCatInfo(catsInfo[0]);

  return (
    <DescrWrap>
      <TitleBreed>{name}</TitleBreed>
      <BreedText>{description}</BreedText>
      <FlexWrap>
        <TemperamentWrap>
          <PropertyTitle>Temperaments:</PropertyTitle>
          <PropertyDescr>{temperament}</PropertyDescr>
        </TemperamentWrap>
        <AddWrap>
          <PropertyTitle>
            Origin: <PropertyDescr>{origin}</PropertyDescr>
          </PropertyTitle>

          <PropertyTitle>
            Weight: <PropertyDescr>{weight} kgs</PropertyDescr>
          </PropertyTitle>

          <PropertyTitle>
            Life span: <PropertyDescr>{lifeSpan} years</PropertyDescr>
          </PropertyTitle>
        </AddWrap>
      </FlexWrap>
    </DescrWrap>
  );
};
