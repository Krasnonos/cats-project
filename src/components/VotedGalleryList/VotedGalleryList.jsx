import { VotedGalleryItem } from '../';
import { List } from './VotedGalleryList.styled';

export const VotedGalleryList = ({ cats, action, isDeliting }) => {
  return (
    <List>
      {cats.map(cat => (
        <VotedGalleryItem
          cat={cat}
          key={cat.id}
          action={action}
          isDeliting={isDeliting}
        />
      ))}
    </List>
  );
};
