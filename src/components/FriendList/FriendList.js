import propTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <li key={friend.id}>
          <span
            style={
              friend.isOnline
                ? { backgroundColor: 'green' }
                : { backgroundColor: 'red' }
            }
          ></span>
          <img src={friend.avatar} alt={friend.name + ' avatar'} width="48" />
          <p>{friend.name}</p>
        </li>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};
