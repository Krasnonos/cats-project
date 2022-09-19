import {
  HeaderInputAndNavigation,
  CurrentPageNavigation,
} from '../../components';
import { Section, Wrap } from './GalleryPage.styled';

export const GalleryPage = () => {
  return (
    <Section>
      <HeaderInputAndNavigation />
      <Wrap>
        <CurrentPageNavigation currentPage={'gallery'} />
      </Wrap>
    </Section>
  );
};
