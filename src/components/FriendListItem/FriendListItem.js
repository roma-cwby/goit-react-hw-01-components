import propTypes from 'prop-types';

export const FriendsListItem = ({ friend }) => {
  return (
    <>
      <span
        style={
          friend.isOnline
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
      ></span>
      <img src={friend.avatar} alt={friend.name + ' avatar'} width="48" />
      <p>{friend.name}</p>
    </>
  );
};

FriendsListItem.propTypes = {
  friend: propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
  }).isRequired,
};
