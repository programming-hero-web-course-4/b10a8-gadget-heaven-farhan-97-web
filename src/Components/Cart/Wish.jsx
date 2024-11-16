import React from 'react';

const Wish = ({wish}) => {
    return (
      
        <div>
         
            <div className="bg-base-200">
  <div className="hero-content flex-col lg:flex-row justify-start">
    <img
      src={wish.product_image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{wish.product_title}</h1>
      <p className="py-6">
       {wish.description}
      </p>
      <p className="py-6">
       {wish.price}
      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Wish;