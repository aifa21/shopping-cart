import React, { useEffect, useState } from "react";
import fakeData from "../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import samsung from "../../images/products/sumsung/samsung1.jpeg";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const saveCart=getDatabaseCart();//saveCart[key]=quantity//lemon[A]=2
    const productKeys=Object.keys(saveCart);
    const previousCart=productKeys.map(pKeys=>{
      const product=fakeData.find(fk=>fk.key===pKeys);
      product.quantity=saveCart[pKeys];
      return product;
    })
    setCart(previousCart);
  },[])
  const handleProduct = (product) => {
    const keyAdded=product.key;
    const sameProduct=cart.find(pd=>pd.key===keyAdded);
    let count=1;
    let newCart;
    if(sameProduct){
      
      count= sameProduct.quantity+1;
      sameProduct.quantity=count;
      const others=cart.filter(pd=>pd.key!==keyAdded);
      newCart=[...others,sameProduct];
    }
    else{
      product.quantity=1;
      newCart=[...cart,product];

    }
   setCart(newCart);
    addToDatabaseCart(product.key,count);
  };

  return (
    <div className="main-container">
      <div className="shop-container">
        <h2 className="title">Featured Products</h2>
        {products.map((pd) => (
          <Product
            key={pd.key}
            handleProduct={handleProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2 className="title">Cart Items</h2>
        <Cart cart={cart}>
          {/* child */}
        <Link to="./review"><button className="shop-btn">Review Button</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
