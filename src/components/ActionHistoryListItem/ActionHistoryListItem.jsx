import { format } from 'date-fns';
import svg from '../../image/icons.svg';
import {
  ListItem,
  Time,
  Text,
  ActionId,
  ActionSvg,
} from './ActionHistoryListItem.styled';

export const ActionHistoryListItem = ({ remove, action }) => {
  const { id, time, vote } = action;

  const choseVote = vote => {
    if (vote === 1) {
      return 'Likes';
    }
    if (vote === 0) {
      return 'Dislikes';
    } else {
      return 'Favorites';
    }
  };
  const choseIcon = vote => {
    if (vote === 1) {
      return `${svg}#icon-likeGreen`;
    }
    if (vote === 0) {
      return `${svg}#icon-dislikeYellow`;
    } else {
      return `${svg}#icon-favRedS`;
    }
  };

  return (
    <ListItem>
      <Time>{format(time, 'HH:mm')}</Time>
      <Text>
        Image ID: <ActionId>{id}</ActionId>
        {remove ? ' was removed from ' : ' was added to '}
        {choseVote(vote)}
      </Text>
      {!remove && (
        <ActionSvg width="20" height="20">
          <use href={choseIcon(vote)}></use>
        </ActionSvg>
      )}
    </ListItem>
  );
};
