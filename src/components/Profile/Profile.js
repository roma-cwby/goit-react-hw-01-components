import propTypes from 'prop-types';
import { ProfileBox, ProfileInfo, ProfileList } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileBox>
      <ProfileInfo>
        <img src={avatar} alt={username + ' avatar'} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileInfo>

      <ProfileList>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ProfileList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number).isRequired,
};
