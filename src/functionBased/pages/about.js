import React from "react"
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div >
      <div>hello from about Page</div>
      <ul>
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
export default About