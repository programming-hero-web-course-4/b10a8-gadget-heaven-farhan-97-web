import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ productData }) => {
    const { product_id,product_title, price,product_image } = productData;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                       
                       <Link to={`/card/${product_id}`}>
                       <button className="btn btn-primary">View Details</button>
                       </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;