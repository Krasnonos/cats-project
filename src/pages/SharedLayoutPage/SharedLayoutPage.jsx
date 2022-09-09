import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import svg from '../../image/icons.svg';
import voting from '../../image/voting.png';
import breeds from '../../image/breeds.png';
import gallery from '../../image/gallery.png';
import { changeTheme } from '../../redux/themeSlice';

import {
  Container,
  Header,
  LogoBtn,
  LogoText,
  TitleWrap,
  HeroTitle,
  HeroWelcome,
  HeroStart,
  PagesList,
  LeftBar,
} from './SharedLayoutPage.styled';
import { NavButton } from '../../components/NavButton/NavButton';

export const SharedLayoutPage = () => {
  const isDarkTheme = useSelector(store => store.theme.isNightTheme);
  const dispatch = useDispatch();

  return (
    <Container>
      <LeftBar>
        <Header>
          <LogoBtn to={'/'}>
            <svg width="24" height="24">
              <use href={svg + '#icon-Logo'}></use>
            </svg>{' '}
            <LogoText width="72" height="13">
              <use href={svg + '#icon-PetsPaw'}></use>
            </LogoText>{' '}
          </LogoBtn>
          <input
            checked={isDarkTheme}
            onChange={() => dispatch(changeTheme())}
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
          />
          <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
          </label>
        </Header>
        <div>
          <TitleWrap>
            <HeroTitle>Hello!</HeroTitle>
            <HeroWelcome>Welcome to cat house</HeroWelcome>
          </TitleWrap>
          <HeroStart>Try to use our application</HeroStart>
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
        </div>
      </LeftBar>
      <Outlet />
    </Container>
  );
};
