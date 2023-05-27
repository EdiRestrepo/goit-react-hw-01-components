import React from 'react';
import PropTypes from "prop-types";
import './FriendList.css'

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({avatar, name, isOnline, id}) => {
        return (
          <li key={id} className="item">
            <span className={isOnline ? 'status' : '' } ></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
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
