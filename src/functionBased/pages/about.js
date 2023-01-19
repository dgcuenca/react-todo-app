import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => (
  <div>
    <div>hello from about Page</div>
    <ul>
      <li>
        <NavLink to="about-app">About App</NavLink>
      </li>
      <li>
        <NavLink to="about-author">About Author</NavLink>
      </li>
    </ul>
    <Outlet />
  </div>
);
export default About;
