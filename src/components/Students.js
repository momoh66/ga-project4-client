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
const Students = () => {
  return (
    <section className="student-section">
      <div className="hero animate__animated animate__jackInTheBox ">
        {/* <div className="hero-text">
          <div className="hero-text-logo">
            <img src={qpsLogo} alt="QPS logo" className="home-logo" />
            <h1>
              Welcome to <br /> The Students Portal!
            </h1>
          </div>
          <p>Vade Mecum!</p>
        </div> */}
        <div className="hero-text">
          <div className="hero-text-logo">
            
            <h2 className="memoboard-heading">
              Welcome to the Students Portal!
            </h2>
          </div>
          <h3>This is the portal </h3>
        </div>
      </div>
      <footer id="home-footer">
        Created at GA SEI62 &#126; Copyright &copy; 2022 Mohamed Mohamed
      </footer>
    </section>
  );
};

export default Students;
