import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Roots from './Roots/Roots';
import Home from './Home/Home';
import Bookdetails from './Bookdetails/Bookdetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        
        
        
      },
      {
        path:'/book/:bookId',
        element:<Bookdetails></Bookdetails>,
        loader:()=>fetch('../bookshop.json')

      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
