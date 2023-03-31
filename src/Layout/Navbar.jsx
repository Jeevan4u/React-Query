import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/superhero" className="p-4">
        SuperHero
      </Link>
      <Link to="/rq-superHero" className="p-4">
        RQsuperHero
      </Link>
      <Link to="/mysuperhero" className="p-4">
        Mysuperhero
      </Link>
    </div>
  );
};
export default Navbar;
