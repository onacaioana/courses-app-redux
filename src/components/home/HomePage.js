import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h2>Home Page - First app page</h2>
    <p>
      Hello everyone, this will be the homepage.To find out more about us click
      here.
    </p>
    <Link to="/about" className="btn btn-primary btn-lg">
      Find more
    </Link>
  </div>
);

export default HomePage;
