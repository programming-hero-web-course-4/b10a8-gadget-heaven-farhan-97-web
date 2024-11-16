import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Components/Root.jsx';
import Statistics from './Components/Statistics.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Home from './Components/Home/Home.jsx';
import Details from './Components/Home/Details.jsx';
import TotalCardContainer from './Components/Home/TotalCardContainer.jsx';
import About from './Components/Home/About.jsx';
import Error from './Components/Error.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children : [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('/category.json'),
        
        
      },
      
      {
        path: 'card/:cardId',
        element: <Details></Details>,
        loader: ()=> fetch('/allData.json')
        
      }

      ,
      {
        path:'statistics',
        element: <Statistics></Statistics>,
        loader: ()=> fetch('/allData.json')
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        loader: ()=> fetch('/allData.json')
      },
      {
        path:'about',
        element:<About></About>,
        
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <HelmetProvider>
   <RouterProvider router={router} />
   <ToastContainer />
   </HelmetProvider>
  </React.StrictMode>
);
