import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addTostoredCart, addTostoredwish } from '../../utilities/addToDb';
import { FaShoppingCart } from "react-icons/fa";
import { BiHeartCircle } from "react-icons/bi";
import { toast } from 'react-toastify';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Details = () => {
    const { cardId } = useParams();
    const detailsData = useLoaderData();
    const id = parseInt(cardId);
    const targetCard = detailsData.find(x => x.product_id === id)
    const { product_title, product_image, price, description, specification,rating } = targetCard;

    const handleAddtoCart = (id) => {
        addTostoredCart(id);

    }
    const handleAddtowish = (id) => {
        addTostoredwish(id);

    }
    return (
        <div>
            <div className='w-full h-96 bg-[#9538E2]'>
                <h1 className='text-center text-3xl text-white py-7'>Product Details</h1>
                <p className='text-center text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="hero bg-base-200 w-3/5 mx-auto relative bottom-36">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{product_title}</h1>
                        <p className="text-xl font-bold">Price :$ {price}</p>
                        <p>{description}</p>
                        <p className="font-bold">Specifications</p>
                        <p>{specification[0]}</p>
                        <p>{specification[1]}</p>
                        <p>{specification[2]}</p>
                        <p>{specification[3]}</p>
                        <p className="font-bold">Rating</p>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                        <button onClick={() => handleAddtoCart(id)} className="btn btn-primary">Add to Cart<FaShoppingCart /></button>
                        <button onClick={() => handleAddtowish(id)} className="btn"><BiHeartCircle /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;