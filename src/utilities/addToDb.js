import {  toast } from 'react-toastify';
const getStoredCart = ()=>{
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}
const getStoredwish = ()=>{
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}
const addTostoredCart =(id)=>{
    const storedList = getStoredCart();
    if(storedList.includes(id)){
        console.log(id, 'already exist');
        const notify = () => toast("Item already exist");
        notify();
        
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        const notify = () => toast("Item added to cart");
        notify();
    }
}
const addTostoredwish =(id)=>{
    const storedList = getStoredwish();
    if(storedList.includes(id)){
        console.log(id, 'already exist');
        const notify = () => toast("Item already exist");
        notify();
        
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        const notify = () => toast("Item added to wish list");
        notify();
    }
}

export {addTostoredCart,addTostoredwish,getStoredCart,getStoredwish}