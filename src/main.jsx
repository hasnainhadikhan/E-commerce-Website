import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './App.jsx';
import Product  from './Product.jsx';
import Contact from './Contact.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx';
import NotFound from './NotFound.jsx'
import './index.css'
import ProductDeatil from './ProductDeatil.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product/> },
  { path:"/product/:id",element:<ProductDeatil/>  },
 { path:"/contact", element:<Contact/>},
 { path:"/signup", element:<Signup/>},
 { path:"/login", element:<Login/>},
 { path:"*", element:<NotFound/>}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
 
  </StrictMode>,
)
