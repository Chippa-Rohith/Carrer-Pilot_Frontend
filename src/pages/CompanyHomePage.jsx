import React from 'react';
import { Button } from 'antd';
import JobSeeker from '../assets/4236127.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <nav className="landing-page-nav">
        <h1 className="landing-page-title">CareerPilot</h1>
        <div className="landing-page-nav-buttons">
          <Link to={'/login'}>
            <Button type="primary" size="large" className="landing-page-nav-button">Login</Button>
          </Link>
          <Link to={'/signUp'}>
            <Button type="primary" size="large" className="landing-page-nav-button">SignUp</Button>
          </Link>
        </div>
      </nav>
      <div className="landing-page-main">
        <div className="landing-page-content">
          <div className="landing-page-text">
            <h2 className="landing-page-heading">Find the job that fits your lifestyle</h2>
            <h3 className="landing-page-subheading">Connecting job seekers with great opportunities.</h3>
            <p className="landing-page-description">
              We are the go-to destination for job seekers who want to take their career to the next level. With millions of job postings from top companies around the world, we help job seekers find the perfect opportunity to advance their careers.
            </p>
          </div>
          <div className="landing-page-nav-buttons-2">
          <Link to={'/login'}>
            <Button type="primary" size="large" className="landing-page-nav-button">Login</Button>
          </Link>
          <Link to={'/signUp'}>
            <Button type="primary" size="large" className="landing-page-nav-button">SignUp</Button>
          </Link>
        </div>
          <div className="landing-page-image-container">
            <img 
              src={JobSeeker}
              alt="illustration" 
              className="landing-page-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

