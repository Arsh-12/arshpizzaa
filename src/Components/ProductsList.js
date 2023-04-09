import React from "react";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5";
import Product6 from "./Product6";
import Product7 from "./Product7";
import Product8 from "./Product8";
import Product9 from "./Product9";
import Product10 from "./Product10";
const ProductsList = () => {
  return (
    <div>
      <h2 id="proList">Products</h2>
      <div className="grid grid-cols-5 my-8 gap-24 mx-4">
        <Product1/>
        <Product2/>
        <Product3/>
        <Product4/>
        <Product5/>
        <Product6/>
        <Product7/>
        <Product8/>
        <Product9/>
        <Product10/>

        
      </div>
    </div>
  );
};

export default ProductsList;
