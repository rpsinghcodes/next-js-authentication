import Link from 'next/link';
import classes from './MainNavigation.module.css';
import { isTokenVerified } from '../../util/token';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function MainNavigation() {
    const credential = useSelector(state => state.credential);
    const router =  useRouter();
    const Logout = () => {
      isTokenVerified('');
      router.reload();
    }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            {credential.isLogedIn ?  <Link href='/new-meetup'>Add New Meetup</Link>: <Link href='/login'>Login</Link>}
          </li>
          <li>
            {!credential.isLogedIn &&   <Link href='/signup' >Signup</Link>}
          </li>
          <li>
            {credential.isLogedIn && <button onClick={Logout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
