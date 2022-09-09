import { LogoLink, LogoText } from './Logo.styled';
import svg from '../../image/icons.svg';

export const Logo = () => {
  return (
    <LogoLink to={'/'}>
      <svg width="24" height="24">
        <use href={svg + '#icon-Logo'}></use>
      </svg>{' '}
      <LogoText width="72" height="13">
        <use href={svg + '#icon-PetsPaw'}></use>
      </LogoText>{' '}
    </LogoLink>
  );
};
