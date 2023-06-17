import React, { useState } from 'react';
import classes from './navBar.module.css';
import { Link } from 'react-router-dom';
import womanImg from '../../assets/woman.jpg';
const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/">Blog</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Contacts</li>
          <li className={classes.listItem}>Categories</li>
        </ul>
        <div className={classes.right}>
          <img
            onClick={() => setShowModal((prev) => !prev)}
            src={womanImg}
            alt="woman"
            className={classes.img}
          />
          <Link to="/create">Create</Link>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
