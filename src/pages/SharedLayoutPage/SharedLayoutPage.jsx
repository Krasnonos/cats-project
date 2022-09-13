import { Outlet } from 'react-router-dom';
import { DayNightCheckbox, MainNavLinksList, Logo } from '../../components';

import {
  Container,
  Header,
  TitleWrap,
  HeroTitle,
  HeroWelcome,
  HeroStart,
  LeftBar,
} from './SharedLayoutPage.styled';

export const SharedLayoutPage = () => {
  return (
    <Container>
      <LeftBar>
        <Header>
          <Logo />
          <DayNightCheckbox />
        </Header>
        <div>
          <TitleWrap>
            <HeroTitle>Hello!</HeroTitle>
            <HeroWelcome>Welcome to cat house</HeroWelcome>
          </TitleWrap>
          <HeroStart>Try to use our application</HeroStart>
          <MainNavLinksList />
        </div>
      </LeftBar>
      <Outlet />
    </Container>
  );
};
