import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
  & + & {
    margin-left: 16px;
  }
`;

export const ImgLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 198px;
  background-color: ${p => p.bgcolor};
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: ${p => p.theme.radii.round};

  &.active {
    border: 4px solid ${p => p.theme.colors.hoverBgBtn};
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 139px;
  height: 36px;
  margin-top: 10px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.33;
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.colors.mainTextBtn};
  background-color: ${p => p.theme.colors.mainBgBtn};

  &.active {
    background-color: ${p => p.theme.colors.activeBgBtn};
    color: ${p => p.theme.colors.activeTextBtn};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.hoverBgBtn};
  }
`;
