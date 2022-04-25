import React from 'react';
import qpsLogo from '../images/QPS-logo1.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faChalkboardTeacher,
  faSign,
} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
const Home = () => {
  return (
    <section className="home-section">
      <div className="hero animate__animated animate__jackInTheBox ">
        <div className="hero-text">
          <div className="hero-text-logo">
            <img src={qpsLogo} alt="QPS logo" className="home-logo" />
            <h1>
              Welcome to <br /> The Quebec Private School
            </h1>
          </div>
          <p>Vade Mecum!</p>

          <div className="hero-items">
            <Link to={'/students'} className="hero-item">
              <FontAwesomeIcon icon={faBook} />
              Students
            </Link>
            <Link to={'/teachers'} className="hero-item ">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              Teachers
            </Link>
            <Link to={'/parents'} className="hero-item">
              <FontAwesomeIcon icon={faSign} />
              Parents
            </Link>
          </div>
        </div>
      </div>
      <footer id="home-footer">
        Created at GA SEI62 &#126; Copyright &copy; 2022 Mohamed Mohamed
      </footer>
    </section>
  );
};

export default Home;
