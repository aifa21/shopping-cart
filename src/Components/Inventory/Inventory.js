import React from 'react';

const Inventory = () => {
    const handleProduct=()=>{
        const product={};
        fetch('https://whispering-island-36789.herokuapp.com/addProduct',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
               <p><span>NAME:</span><input type="text"/></p>
               <p><span>PRICE:</span><input type="text"/></p>
               <p><span>QUANTITY:</span><input type="text"/></p>
               <p><span>Product Image:</span><input type="file"/></p>
           </form>
            <button onClick={handleProduct}> Add</button>
        </div>
    );
};

export default Inventory;