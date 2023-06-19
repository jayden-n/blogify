import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quo voluptatum, ullam quam perspiciatis deleniti obcaecati alias
            animi. Iure, eaque dicta!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>
            GitHub:{' '}
            <a
              href="https://github.com/jayden-n"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'red' }}
            >
              jayden-n
            </a>
          </span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>

          <span>Country: Canada</span>
          <span>Current Planet: Earth</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
