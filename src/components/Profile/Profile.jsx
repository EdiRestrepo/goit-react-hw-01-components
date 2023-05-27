import PropTypes from "prop-types";
import css from './Profile.module.css';


import React from 'react';

export const Profile = ({username, tag,location, avatar,stats }) => {

    const {followers,views, likes } = stats;

  return (
    <div className={css["profile"]}>
      <div className={css["description"]}>
        <img
          src={avatar}
          alt="User avatar"
          className={css["avatar"]}
        />
        <p className={css["name"]}>{username}</p>
        <p className={css["tag"]}>@{tag}</p>
        <p className={css["location"]}>{location}</p>
      </div>

      <ul className={css["stats"]}>
        <li>
          <span className={css["label"]}>Followers</span>
          <span className={css["quantity"]}>{followers}</span>
        </li>
        <li>
          <span className={css["label"]}>Views</span>
          <span className={css["quantity"]}>{views/1000}</span>
        </li>
        <li>
          <span className={css["label"]}>Likes</span>
          <span className={css["quantity"]}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
    userName: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
  };
