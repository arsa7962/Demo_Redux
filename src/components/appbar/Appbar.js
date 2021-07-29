import { useSelector, useDispatch } from 'react-redux';

import classes from './Appbar.module.css';
import { authActions } from '../../store/auth';

/**
 *
 * @returns Appbar 
 * when user is authenticated it provides options of myproducts , sales and logout option
 * Here,The logout option directs to authentication page
 */

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <span>My Products</span>
            </li>
            <li>
              <span>My Sales</span>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
