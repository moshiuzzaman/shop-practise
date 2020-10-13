import React, { useState } from 'react';
import fakeData from "../../fakeData";
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const product10 = fakeData.slice(0,10);
    const [product, setProduct]=useState(product10);
    const [cart , setCart]= useState([])
    
    const addProductHandelar=(product)=>{
       
        console.log('clicked', product);
        const newCart= [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="shop">
            <div className="allProducts">
            {
            product.map(product=><Product addProductHandelar={addProductHandelar}  product={product}></Product>)

            }
            <Product product={product10}></Product>
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;