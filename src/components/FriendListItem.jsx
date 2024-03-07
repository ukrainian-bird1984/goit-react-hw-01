import React from 'react';
import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <div className="friend-list-item">
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p style={{ color: statusColor }}>{statusText}</p>
    </div>
  );
};

export default FriendListItem;
