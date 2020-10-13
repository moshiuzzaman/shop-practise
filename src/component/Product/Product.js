import React from 'react';

const Product = (props) => {
    const {name, img, seller, price, stock}=props.product
    return (
        <div className="product">
            <img src={img} alt=""/>
            <div>
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price : ${price}</p>
                <button onClick={()=>props.addProductHandelar(props.product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;