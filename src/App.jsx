import React from 'react';

// Profile
import Profile from './components/Profile/Profile';
import userData from "../userData.json";
const AppProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <Profile {...userData} />
    </div>
  );
};

// FriendsList
import FriendList from './components/FriendList/FriendList';
import FriendListItem from './components/FriendListItem/FriendListItem';
import friends from "../friends.json";
const AppFriendsList = () => {
  return (
    <>
      <FriendListItem
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

// TransactionHistory
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
const AppTransactionHistory = () => {
  return (
    <>
      <TransactionHistory items={transactions} />
    </>
  );
};

export { AppProfile, AppFriendsList, AppTransactionHistory };
