import React from 'react';
import { Link } from 'react-router-dom';

const Camera = (props) => {
    const { img, key,name, price, category,seller } = props.camera;
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

export default Camera;