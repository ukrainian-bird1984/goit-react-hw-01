import userData from "../userData.json"
import friends from "../friends.json"
import transactions from "../transactions.json"
import profile from "../profile.json"


// Profile
import Profile from './components/Profile/Profile';
const AppProfile = () => {
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
import FriendList from './components/FriendList/FriendList';
import FriendListItem from './components/FriendListItem/FriendListItem';
import userData from "../userData.json";
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
