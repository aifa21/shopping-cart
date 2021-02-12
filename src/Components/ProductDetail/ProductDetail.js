import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css';
const ProductDetail = () => {
     
    const {productKey}=useParams();
    const product=fakeData.find(pd=>pd.key===productKey);
    // console.log(product);
    return (
        <section className="section product-detail">
               <div><h2 className="title"> Product Details</h2></div>
            <div className="details container-md">
          
                <div className="left">
                    <div className="main"><img src={product.img}/></div>
                </div>
                <div className="right">
                    <h3>{product.name}</h3>
                    <p className="price">${product.price}</p>
                    <form>
                        <div>
                            <select>
                                <option value="select size" selected disabled>Select Size</option>
                                <option value="1">32</option>
                                <option value="2">42</option>
                                <option value="3">52</option>
                            </select>
                        </div>
                    </form>
                    <form className="form">
                        <input className="input-form"type="text" placeholder="1"></input>
                        <button  className="productDetail-btn" >Add to cart</button>
                    </form>
                    <h3>Product Detail</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima delectus nulla voluptates nesciunt
          quidem laudantium, quisquam voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!</p>
                </div>
            </div>
          
           
        </section>
    );
};

export default ProductDetail;