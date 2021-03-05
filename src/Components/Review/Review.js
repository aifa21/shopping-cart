import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import fakeData from "../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile} from '@fortawesome/free-solid-svg-icons'

const Review = () => {
  const [cart, setCart] = useState([]);
  const [place, setPlace] = useState(false);
  const history =useHistory();
  const handlePlaceOrder = () => {
    history.push('/shipment');
    // setCart([]);
    // setPlace(true);
    // processOrder();
  };
  const handleRemove = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const saveCart = getDatabaseCart(); //saveCart[key]=quantity like saveCart[bfrhbr]=3
    const productKeys = Object.keys(saveCart);

    fetch('https://whispering-island-36789.herokuapp.com/productsByKeys',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(productKeys)
    })
    .then(res=>res.json())
    .then(data=>setCart(data))
    
  }, []);

  return (
    <div className="main-container">
      <div className="shop-container">
        <h2 className="title">Review Products</h2>
        {
        cart.map((pd) => (
          <ReviewItem 
          key={pd.key} 
          product={pd} 
          handleRemove={handleRemove}>
          </ReviewItem>
        ))
        }
        {
          place&&<h1 style={{textAlign:'center',color:'orangered'}} >  <FontAwesomeIcon icon={faSmile} />Thank you for placing order</h1>
        }
      </div>
      <div className="cart-container">
        <h2 className="title">Cart Items</h2>
        <Cart cart={cart}>
          <button className="shop-btn" onClick={handlePlaceOrder}>
            Proceed Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
