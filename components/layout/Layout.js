import { useSelector } from 'react-redux';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Login } from '../../store';



function Layout(props) {
  const dispatch = useDispatch();  
  const isLogedIn = useSelector(state => state.credential.isLogedIn);
  console.log(isLogedIn);
  useEffect(() => {
    const token = localStorage.getItem('token') || '';
  const username = localStorage.getItem("userName") || "";
  if(token.length > 0 || username.length > 0) {
    dispatch(Login({token, username, isLogedIn: true}));
  }
  }, [])
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}


export default Layout;

