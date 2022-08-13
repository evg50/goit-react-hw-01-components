// import user from './user.json';
import './styeles/normalize.css';
import './App.css';
import Profile from './components/Profile';
import statistics from './statistical-data.json';
import StatisticsList from './components/StatisticsList';
// import Statistic from './components/Statistic'
import friendList from './friends.json';
import FriendList from './components/FriendList';
import Transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory';

console.log();
function App() {
	return (
		<div className="App">
			<TransactionHistory items={Transactions} />

			<StatisticsList title="Upload stats" stats={statistics} />
			<FriendList friends={friendList} />
		</div>
	);
}

export default App;
// <Profile avatar={user.avatar} name={user.name} tag={user.tag} location={user.location}
// followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}
// />
