import { getUniqImages } from '../../utils';
import { GelleryItem } from '../GalleryItem/GalleryItem';
import { List } from './Gallery.styled';

export const Gallery = ({ images }) => {
  const uniqImages = getUniqImages(images);
  console.log(uniqImages);
  return (
    <List>
      {uniqImages.map(img => (
        <GelleryItem key={img.id} img={img} />
      ))}
    </List>
  );
};
