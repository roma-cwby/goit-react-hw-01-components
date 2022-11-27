import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistic/Statistic';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import user from 'datas/user.json';
import stat from 'datas/data.json';
import friends from 'datas/friends.json';
import transactions from 'datas/transactions.json';

import { MainContainer } from './App.styled';

export const App = () => {
  return (
    <MainContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" data={stat} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </MainContainer>
  );
};
