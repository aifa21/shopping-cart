import React from 'react';
import brand1 from '../../images/brand1.jpg';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand5.png';
import brand4 from '../../images/brand6.png';
import './Brand.css';
const Brand = () => {
    return (
       
    <div id="brand">


<div className="row">
<div className="brand-slider col-sm-12">
  <img src={brand1} alt="" className="item"/>
  <img src={brand2} alt="" className="item"/>
  <img src={brand3} alt="" className="item" />
  <img src={brand4} alt="" className="item"/>
  
</div>
</div>

</div>
       
    );
};

export default Brand;