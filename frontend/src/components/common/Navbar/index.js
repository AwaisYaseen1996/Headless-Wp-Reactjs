import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  const auth = localStorage.getItem('user');
  return (
    <div className="p-5 nav_head">
      <div className="p-5">
        <div className="max-w-5xl mx-auto flex justify-between items-center py-2">
          <div>
            <Link to="/" className="text-2xl font-semibold">IWS</Link>
          </div>
        </div>
      </div>

      <ul className="flex flex-wrap gap-5 justify-end nav_list">
        <li className="nav_list_item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav_list_item">
          <Link to="/posts">Posts</Link>
        </li>
        {!auth ? (
        <li className="nav_list_item">
          <Link to="/login">Login</Link>
        </li>
        ):(
          <>
            <li className="nav_list_item">
              <Link to='/add-post'>Add Post</Link>
            </li>
            <li className="nav_list_item">
              <Link to='/logout'>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
