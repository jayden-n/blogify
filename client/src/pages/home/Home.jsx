import React from 'react';
import classes from './home.module.css';
import NavBar from '../../components/navBar/NavBar';
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs';
import Categories from '../../components/categories/Categories';

const Home = () => {
  return (
    <div>
      <NavBar />
      <FeaturedBlogs />
      <Categories />
    </div>
  );
};

export default Home;
