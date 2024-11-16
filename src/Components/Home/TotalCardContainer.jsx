import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link, Outlet, useParams } from 'react-router-dom';

const TotalCardContainer = ({categoryData}) => {
    
   const {category} = useParams();
   
   
    
    const [cardData,setCardData] = useState([]);
    useEffect(()=>{
        fetch('/allData.json')
        .then(res => res.json())
        .then(data => setCardData(data)
        )
    },[])
   
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex justify-between'>
            <div className='flex flex-col gap-6'>
                
                {
                    categoryData.map(category=>(
                        <Link key={category.id}><button className="btn bg-base-300">{category.category}</button></Link>
                    )


                    )
                }
            </div>
            <div className='grid grid-cols-3 gap-6'>
                
                {
                    cardData.map(x=><Card productData={x} key={x.product_id}></Card>)
                }
                
            </div>
        </div>
        </div>
    );
};

export default TotalCardContainer;