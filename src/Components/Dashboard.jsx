import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart, getStoredwish } from '../utilities/addToDb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from './Cart/Cart';
import Wish from './Cart/Wish';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const allData = useLoaderData();
    const [cartData,setCartData] = useState([]);
    const [wishData,setWishData] = useState([]);
    const [sort,setSort] = useState('');
    
    useEffect(()=>{
        const storedCartList = getStoredCart();
        const storedCartListint = storedCartList.map(id=>parseInt(id));
        console.log(storedCartListint);
        
        
        
        
        const cartList = allData.filter(cart => storedCartListint.includes(cart.product_id));
        console.log(cartList);
        
        setCartData(cartList);
        
        
    },[])
    const handleSort = sortType =>{
      setSort(sortType);
      const sortedCart = [...cartData].sort((a,b)=>b.price-a.price)
      setCartData(sortedCart)

    }
    useEffect(()=>{
        const storedWishList = getStoredwish();
        const storedWishListint = storedWishList.map(id=>parseInt(id));
        console.log(storedWishListint);
        
        
        
        
        const wishList = allData.filter(wish => storedWishListint.includes(wish.product_id));
        
        
        setWishData(wishList);
        
        
    },[])
    return (
        <div>
          <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className='w-full h-96 bg-[#9538E2]'>
                <h1 className='text-center text-3xl text-white py-7'>Dashboard</h1>
                <p className='text-center text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
               
            </div>
            <Tabs>
    
            <TabList className={'text-center'}>
      <Tab>Cart</Tab>
      <Tab>Wish list</Tab>
    </TabList>
    <TabPanel>
     <div className='flex justify-between items-center'>
     <h2 className='text-3xl font-bold'>cart : {cartData.length}</h2>
     <div>
      <button onClick={()=>handleSort('price')} className="btn btn-primary">Sort by price</button>
     </div>
     </div>
      {
        cartData.map(cart => <Cart cart={cart} key={cart.product_id}></Cart>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Wish list {wishData.length}</h2>
      {
        wishData.map(wish=><Wish wish={wish} key={wish.product_id}></Wish>)
      }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Dashboard;