import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import FriendListItem from "./components/FriendListItem/FriendListItem";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

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
