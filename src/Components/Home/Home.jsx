import React from 'react';
import Banner from './Banner';
import TotalCardContainer from './TotalCardContainer';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const categoryData = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
           
            <TotalCardContainer categoryData={categoryData}></TotalCardContainer>
        </div>
    );
};

export default Home;