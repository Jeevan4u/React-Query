import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-indigo-300 pt-4  ">
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
      <Link to="/rq-parallel" className="p-4">
        Parallel Query
      </Link>
      <Link to="/rq-dynamic" className="p-4">
        Dynamic Parallel Query
      </Link>
      <Link to="/rq-dependent" className="p-4">
        dependent Parallel Query
      </Link>
      <Outlet />
    </div>
  );
};
export default Navbar;
