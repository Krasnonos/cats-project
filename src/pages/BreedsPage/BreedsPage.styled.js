import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexWrap = styled.div`
  display: flex;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 770px;
  padding: 20px;
  overflow-y: scroll;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: ${p => p.theme.radii.round};
`;
