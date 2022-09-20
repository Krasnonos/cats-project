import svg from '../../image/icons.svg';
import {
  Button,
  TextCurrentPage,
  FlexContainer,
  BreedId,
  UploadBtn,
  UploadSvg,
} from './CurrentPageNavigation.styled';

export const CurrentPageNavigation = ({
  breedId,
  currentPage,
  setIsOpenModal,
}) => {
  return (
    <FlexContainer>
      <Button type="button">
        <svg width="20" height="20">
          <use href={svg + '#icon-back'}></use>
        </svg>
      </Button>
      <TextCurrentPage isMuted={breedId}>{currentPage}</TextCurrentPage>
      {breedId && <BreedId>{breedId}</BreedId>}
      {currentPage === 'gallery' && (
        <UploadBtn type="button" onClick={() => setIsOpenModal(true)}>
          <UploadSvg width="20" height="20">
            <use href={svg + '#icon-upload'}></use>
          </UploadSvg>
          upload
        </UploadBtn>
      )}
    </FlexContainer>
  );
};
