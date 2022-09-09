import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: ${p => p.theme.borders.none};
`;

export const LogoText = styled.svg`
  fill: ${p => p.theme.colors.boldText};
`;
