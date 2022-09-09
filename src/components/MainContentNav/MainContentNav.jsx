import { useLocation, useParams } from 'react-router-dom';
import svg from '../../image/icons.svg';
import {
  Button,
  TextCurrentPage,
  FlexContainer,
  BreedId,
  UploadBtn,
  UploadSvg,
} from './MainContentNav.styled';

export const MainContentNav = ({ id, isUpload, openModal }) => {
  const location = useLocation();
  const { catId } = useParams();
  const currentPage = location.pathname.slice(1);

  return (
    <FlexContainer>
      <Button type="button">
        <svg width="20" height="20">
          <use href={svg + '#icon-back'}></use>
        </svg>
      </Button>
      <TextCurrentPage isMuted={catId}>{currentPage}</TextCurrentPage>
      {catId && <BreedId>{catId}</BreedId>}
      {currentPage === 'gallery' && (
        <UploadBtn type="button">
          <UploadSvg width="20" height="20">
            <use href={svg + '#icon-upload'}></use>
          </UploadSvg>
          upload
        </UploadBtn>
      )}
    </FlexContainer>
  );
};
