import React from 'react';
import { AppProfile, AppFriend, AppFriendList, AppTransactionHistory } from './App';

const App = () => {
  return (
    <div>
      <AppProfile />
      <AppFriendList />
      <AppFriend />
      <AppTransactionHistory />
    </div>
  );
};

export default App;
