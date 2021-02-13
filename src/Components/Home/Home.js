import React from "react";

import b1 from "../../images/banner_01.png";
import b2 from "../../images/banner_02.png";
import b3 from "../../images/collection_01.png";
import  './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-row">
        <div className="home-col col-info">
          <h1>New inspiration<br/>
          Phones made for u</h1>
          <p className="my-3git init">Check out latest deals on cell phone</p>
          <button class="shop-btn"> Shop now</button>
        </div>
        <div className="home-col col-image">
          <img src={b1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
