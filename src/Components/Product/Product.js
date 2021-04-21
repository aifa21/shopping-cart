import React, { useContext } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
    const {name,img,price,key} =props.product;
    // cost[category,setCategory]=useContext();
    document.title="Products";
    return (
       
        <div className="product-container">
                <div className="product-img">
                    <img src={img} alt=""/>
                    </div>
                    <div className="product-info">
                    <h4><Link to={"/product/"+key}>{name}</Link></h4>
                    <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                    
                    </div>
                    <p>${price}</p>
                    <button style={{marginTop:'15px'}} className="shop-btn" onClick={()=>props.handleProduct(props.product)}>Add to cart</button>
                </div>
               
                
            </div> 
    );
};

export default Product;