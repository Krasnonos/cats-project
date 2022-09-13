import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.div`
  display: flex;
  margin-left: 10px;
  height: 60px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.mainBgBtn};

  & + & {
    margin-left: 10px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.hoverTextBtn};
    background-color: ${p => p.theme.colors.hoverBgBtn};
  }

  &.active {
    color: ${p => p.theme.colors.activeTextBtn};
    background-color: ${p => p.theme.colors.activeBgBtn};
  }
`;

export const BtnSvg = styled.svg`
  fill: ${p => p.theme.colors.mainTextBtn};

  ${'a'}:active & {
    fill: ${p => p.theme.colors.activeTextBtn};
  }
`;
