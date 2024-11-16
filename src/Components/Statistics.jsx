import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const statData = useLoaderData();
    
    console.log(statData);
    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
             <div className='w-full h-96 bg-[#9538E2]'>
                <h1 className='text-center text-3xl text-white py-7'>Statistics</h1>
                <p className='text-center text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
               
            </div>
            <div>
    
            
        <BarChart width={1200} height={400} data={statData}>
          <Bar dataKey="price" fill="#008000" />
          <XAxis dataKey="product_title">{statData.product_title}</XAxis>
          <YAxis></YAxis>
        </BarChart>
      
            </div>
        </div>
    );
};

export default Statistics;