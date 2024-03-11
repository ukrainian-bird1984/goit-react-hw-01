import React from 'react';
import css from './FriendList.module.css'; 

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends && friends.map((friend) => (
        <li key={friend.id}>
          <FriendList {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

