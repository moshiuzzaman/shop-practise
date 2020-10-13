import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total, pro)=>total+pro.price,0)
    let ship=0;
    if(total>70){
        ship=0
    }else if(total>50){
        ship=5.98
    }else if(total>20){
        ship=11.98
    }
    const fixedNum=(num)=>Number(num.toFixed(2));
    const beforeTax=total+ship;
    const tax= beforeTax/10;
    const allTotal=beforeTax+tax
    return (
        <div>
            <h4>total order: {cart.length}</h4>
            <p><small>Total Price : ${fixedNum(total)}</small></p>
            <p><small>Shipping & Handling : ${ship}</small></p>
            <p><small>Total before tax: ${fixedNum(beforeTax)}</small></p>
            <p><small>Estimate Tax : ${fixedNum(tax)}</small></p>
            <h4>Order Total: ${fixedNum(allTotal)}</h4>
        </div>
    );
};

export default Cart;