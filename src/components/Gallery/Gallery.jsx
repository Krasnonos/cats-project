import { GelleryItem } from '../GalleryItem/GalleryItem';
import { List } from './Gallery.styled';

export const Gallery = ({ images }) => {
  return (
    <List>
      {images.map(img => (
        <GelleryItem key={img.id} img={img} />
      ))}
    </List>
  );
};
