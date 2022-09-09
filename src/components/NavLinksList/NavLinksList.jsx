import { NavButton } from '../NavLink/NavLink';
import { PagesList } from './NavLinksList.styled';

import voting from '../../image/voting.png';
import breeds from '../../image/breeds.png';
import gallery from '../../image/gallery.png';

export const NavLinksList = () => {
  return (
    <PagesList>
      <NavButton
        img={voting}
        color={'#B4B7FF'}
        text={'voting'}
        path={'voting'}
      />
      <NavButton
        img={breeds}
        color={'#97EAB9'}
        text={'breeds'}
        path={'breeds'}
      />
      <NavButton
        img={gallery}
        color={'#FFD280'}
        text={'gallery'}
        path={'gallery'}
      />
    </PagesList>
  );
};
