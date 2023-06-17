import React from 'react';
import classes from './home.module.css';
import NavBar from '../../components/navBar/NavBar';
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs';

const Home = () => {
  return (
    <div>
      <NavBar />
      <FeaturedBlogs />
    </div>
  );
};

export default Home;
