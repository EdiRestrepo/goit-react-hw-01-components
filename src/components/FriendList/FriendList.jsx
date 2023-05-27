import React from 'react';
import PropTypes from "prop-types";
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friend-list"]}>
      {friends.map(({avatar, name, isOnline, id}) => {
        return (
          <li key={id} className={css["item"]}>
            <span className={isOnline ? css["available"] : css["not-available"] } ></span>
            <img className={css["avatar"]} src={avatar} alt="User avatar" width="48" />
            <p className={css["name"]}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array,
  };
