import React from 'react';

// Profile
import userData from "../userData.json";
import Profile from './components/Profile';
const App = () => {
  const userData = {
    name: 'Jaques Gluke',
    tag: 'gluke',
    location: 'Ocho Rios, Jamaica',
    image: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  return (
    <div>
      <h1>User Profile</h1>
      <Profile {...userData} />
    </div>
  );
};

// FriendsList
import userData from "../userData.json";
import friends from "../friends.json";
import Profile from './components/FriendList';
import Profile from './components/FriendListItem';

const App = () => {
  return (
    <>
      <Profile
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
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;


