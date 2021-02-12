import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = (props) => {
    const {img,name,price,quantity,key}=props.product;
    console.log("props",props);
  //  console.log(props.product);
    return (
      <div className="product-container">
      <div className="product-img">
          <img src={img} alt=""/>
          </div>
          <div className="product-info">
          <h4>{name}</h4>
          <div className="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
          
          </div>
          <p>Quantity : {quantity}</p>
          <p>${price}</p>
          <button  className="shop-btn" onClick={()=>props.handleRemove(key)}>Remove</button>
      </div>
     
      
  </div> 
    );
};

export default ReviewItem;