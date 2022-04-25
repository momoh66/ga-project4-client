import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faHeart,
  faUserLock,
  faChildReaching,
  faSignOut,
  faXmark,
  faCircleUser,
  faBookOpenReader,
} from '@fortawesome/free-solid-svg-icons';
import qpsemblem from '../images/qpsemblem.png';
import { useLocation } from 'react-router-dom';
import { credentials } from '../api/credentials';
import { getLoggedInUserId } from '../lib/auth';

const Navbar = () => {
  let location = useLocation();
  const [sideBar, setSideBar] = useState(false);
  const [onPage, setOnPage] = useState(location.pathname);
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState('');
  // console.log('location.pathname', location.pathname);

  function checkUserLoggedIn() {
    const token = sessionStorage.getItem('token');
    if (!token) return false;
    else if (token) return true;
  }

  function logOutUser() {
    sessionStorage.removeItem('token');
  }
  useEffect(() => {
    setOnPage(location.pathname);
    setLoggedIn(checkUserLoggedIn);
    const getData = async () => {
      if (getLoggedInUserId ) {
        const user = await credentials();
        setProfile(user);
        console.log('profile1', profile);
      }
    };
    getData();
  }, [location,]);
  // console.log('onPage', onPage);

  // console.log(credentials)

  const toggleMenu = () => setSideBar(!sideBar);

  return (
    <header>
      <div className="navbar">
        <Link to={'/'} className="navbar-item logo">
          <img src={qpsemblem} alt="emblem logo" className="emblem" />
          Quebec Private School
        </Link>

        <div className="navbar-right">
          {loggedIn ? (
            <>
              <p className="welcome-banner">
                <span>Welcome home</span>
                <span>
                  {profile.first_name} {profile.last_name}
                </span>
              </p>
              {/* <Link to={`/`} className="navbar-item user-icon">
                <FontAwesomeIcon icon={faCircleUser} />
              </Link> */}
            </>
          ) : (
            <></>
          )}
          {!sideBar ? (
            <Link to={'#'} className="navbar-item bars" onClick={toggleMenu}>
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
            </Link>
          ) : (
            <Link to={'#'} className="navbar-item xMark" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </Link>
          )}
        </div>
      </div>
      <nav
        className={sideBar ? 'sidebar active' : 'sidebar'}
        onClick={toggleMenu}
      >
        <Link
          to={'/'}
          className={onPage === '/' ? 'sidebar-item on-page' : 'sidebar-item'}
        >
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Link>
        <Link
          to={'/about'}
          className={
            onPage === '/about' ? 'sidebar-item on-page' : 'sidebar-item'
          }
        >
          <FontAwesomeIcon icon={faHeart} />
          About
        </Link>
        <Link
          to={'/missionstatement'}
          className={
            onPage === '/mission_statement'
              ? 'sidebar-item on-page'
              : 'sidebar-item'
          }
        >
          <FontAwesomeIcon icon={faBookOpenReader} />
          Mission Statement
        </Link>

        {loggedIn ? (
          <Link
            to={'/login'}
            className={
              onPage === '/logout' ? 'sidebar-item on-page' : 'sidebar-item'
            }
            onClick={logOutUser}
          >
            <FontAwesomeIcon icon={faSignOut} />
            Logout
          </Link>
        ) : (
          <>
            <Link
              to={'/register'}
              className={
                onPage === '/register' ? 'sidebar-item on-page' : 'sidebar-item'
              }
            >
              <FontAwesomeIcon icon={faChildReaching} />
              Register
            </Link>
            <Link
              to={'/login'}
              className={
                onPage === '/login' ? 'sidebar-item on-page' : 'sidebar-item'
              }
            >
              <FontAwesomeIcon icon={faUserLock} />
              Log In
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
