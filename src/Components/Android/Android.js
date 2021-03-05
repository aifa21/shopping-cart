import React from "react";
import "./Android.css";
import { Link } from 'react-router-dom';
const Android = (props) => {
  const { img, key,name, price, category,seller } = props.android;
//    console.log(props.android);
  return (
  
        
        <div className="android-container">
        <Link to={"/product/"+key} style={{ textDecoration: 'none',color:'darkBlue' }} >
        <div className="android-img">
          <img src={img} />
        </div>
        <div className="android-info">
          <p>Price : ${price}</p>
          <p>Seller : {seller}</p>
          <p>Category : {category}</p>
        </div>
        </Link>
      </div>
   
  );
};

export default Android;
