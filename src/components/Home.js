import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavBar } from './Navigation';

export const Home = () => (
  <div className="mainContainer">
    <div>
      <h1 className="mainTitle">Choose Your Coin</h1>
      <div className="container">
        <div>
          <NavBar />
        </div>
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            placeholder="search"
          />
        </div>
        <div>
          <button aria-label="Mute volume" type="button" className="searchButton">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default { Home };
