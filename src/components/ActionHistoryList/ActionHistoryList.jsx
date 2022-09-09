import { ActionHistoryListItem } from '../ActionHistoryListItem/ActionHistoryListItem';
import { ListWrap } from './ActionHistoryList.styled';

export const ActionHistoryList = ({ actions, remove }) => {
  return (
    <ListWrap>
      {actions.map(action => (
        <ActionHistoryListItem
          action={action}
          key={action.id}
          remove={remove}
        />
      ))}
    </ListWrap>
  );
};
