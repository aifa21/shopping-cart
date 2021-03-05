import React, { useState } from 'react';
import Android from '../Android/Android';
import Camera from '../Camera/Camera';
import Laptop from '../Laptop/Laptop';
import fakeData from '../fakeData';
import './AllProduct.css';
const AllProducts = () => {
    const [allProduct,setAllProduct]=useState(fakeData);
    
    const android=allProduct.filter(ap=>ap.category==='android');
    const android1=android.slice(0,6);
    const camera=allProduct.filter(cm=>cm.category==='camera');
    const camera1=camera.slice(0,6);
    const laptop=allProduct.filter(lp=>lp.category==='laptop');
    const laptop1=laptop.slice(0,6);
    return (
        <div id="allProduct">
          <div className="container">
          <div className="name-div">
              <h1 className="title1">Android</h1>
          <div className="row">
           
           {
                android1.map(ad=><Android android={ad} key={ad.key}></Android>)
            }
           </div>
          </div>
            <div className="name-div">
            <h1 className="title1">Camera</h1>
            <div className="row">
             {
                camera1.map(cm=><Camera camera={cm} key={cm.key}></Camera>)
            }
             </div>
            </div>
             <div className="name-div">
                 <h1 className="title1">Laptop</h1>
                 <div className="row">
             {
                laptop1.map(lp=><Laptop laptop={lp} key={lp.key}></Laptop>)
            }
             </div>
             </div>
          </div>

        </div>
    );
};

export default AllProducts;