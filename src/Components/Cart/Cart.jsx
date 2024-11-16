import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
          
            <div className="bg-base-200">
  <div className="hero-content flex-col lg:flex-row justify-start">
    <img
      src={cart.product_image} className='h-32'/>
    <div>
      <h1 className="text-5xl font-bold">{cart.product_title}</h1>
      <p className="py-6">
       {cart.description}
      </p>
      <p className="py-6">
       {cart.price}
      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;