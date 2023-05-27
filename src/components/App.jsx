// import { usersData } from 'utils/user';
// import { statisticsData } from 'utils/data';
// import { friendList } from 'utils/friends';
// import { dataTransactions } from 'utils/transactions';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Profile } from './Profile/Profile';
import transactions from '../data/transactions.json'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import dataStatistics from '../data/data.json';
import friendList from '../data/friends.json'
import users from '../data/user.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={dataStatistics} />
      <Statistics stats={dataStatistics} />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
