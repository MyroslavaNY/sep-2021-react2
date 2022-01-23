import css from './App.module.css';
import Users from 'components/Users';
import Userdetails from 'components/UserDetails';
import Posts from 'components/Posts';

function App = () => {
  return (
    <div >
      <div className={css.wrap}>
        <Users/>
        <UserDetails/>
      </div>
      <Posts/>
    </div>
  );
}

export default App;
