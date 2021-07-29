import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/counter/Counter';
import Header from './components/appbar/Appbar';
import Auth from './components/login/Auth';
import UserProfile from './components/userProfile/UserProfile';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
