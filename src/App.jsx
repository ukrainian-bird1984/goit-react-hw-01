import React from 'react';
import { AppProfile, AppFriendList, AppFriendsList, AppTransactionHistory } from './App';

const App = () => {
  return (
    <div>
      <AppProfile />
      <AppFriendList />
      <AppFriendsList />
      <AppTransactionHistory />
    </div>
  );
};

export default App;
