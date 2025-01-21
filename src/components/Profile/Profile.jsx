import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div style={styles.profileContainer}>
      <div style={styles.description}>
        <img src={image} alt="User avatar" style={styles.avatar} />
        <p style={styles.name}>{name}</p>
        <p style={styles.tag}>@{tag}</p>
        <p style={styles.location}>{location}</p>
      </div>

      <ul style={styles.statsList}>
        <li style={styles.statsItem}>
          <span style={styles.label}>Followers</span>
          <span style={styles.quantity}>{stats.followers}</span>
        </li>
        <li style={styles.statsItem}>
          <span style={styles.label}>Views</span>
          <span style={styles.quantity}>{stats.views}</span>
        </li>
        <li style={styles.statsItem}>
          <span style={styles.label}>Likes</span>
          <span style={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
