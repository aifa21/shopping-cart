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
    removeFromDatabaseCart(productKey);

    setCart(newCart);
  };
  useEffect(() => {
    const saveCart = getDatabaseCart(); //saveCart[key]=quantity like saveCart[bfrhbr]=3
    const productKeys = Object.keys(saveCart);
    // const counts=productKeys.map(key=>saveCart[key]);
    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      // console.log(product);
      return product;
    });
    setCart(cartProduct);
  }, []);

  return (
    <div className="main-container">
      <div className="shop-container">
        <h2 className="title">Review Products</h2>
        {
        cart.map((pd) => (
          <ReviewItem product={pd} handleRemove={handleRemove}></ReviewItem>
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
