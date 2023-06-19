import React from 'react';
import classes from './home.module.css';
import NavBar from '../../components/navBar/NavBar';
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs';
import Categories from '../../components/categories/Categories';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <FeaturedBlogs />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
