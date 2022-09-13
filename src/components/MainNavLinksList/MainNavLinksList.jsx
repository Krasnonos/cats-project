import { MainNavLink } from '../MainNavLink/MainNavLink';
import { PagesList } from './MainNavLinksList.styled';

import voting from '../../image/voting.png';
import breeds from '../../image/breeds.png';
import gallery from '../../image/gallery.png';

export const MainNavLinksList = () => {
  return (
    <PagesList>
      <MainNavLink
        img={voting}
        color={'#B4B7FF'}
        text={'voting'}
        path={'voting'}
      />
      <MainNavLink
        img={breeds}
        color={'#97EAB9'}
        text={'breeds'}
        path={'breeds'}
      />
      <MainNavLink
        img={gallery}
        color={'#FFD280'}
        text={'gallery'}
        path={'gallery'}
      />
    </PagesList>
  );
};
