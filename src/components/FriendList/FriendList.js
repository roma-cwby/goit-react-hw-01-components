import propTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';
import { FriendsListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendsListItem friend={friend} />
        </li>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};
