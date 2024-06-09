import { RouterProvider, createBrowserRouter  } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Register from "./components/Register/Register";

import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Notfound from "./components/Notfound/Notfound";
import Articles from "./components/Articles/Articles";






let routers = createBrowserRouter([
  {path:'' , element: <Layout />, children: [
      {index:true , element: <Home />},
      {path: 'cart', element: <Cart />},
      {path: 'products', element: <Products />},
      {path: 'register', element: <Register />},
      {path: 'categories', element: <Categories />},
      {path: 'brands', element: <Brands />},
      {path: 'blog', element: <Articles />},
      {path: '*', element: <Notfound />}
  ]}
])

function App() {
 

  

    return (
     
     <RouterProvider router={routers}>
  
     </RouterProvider>
    
    );
  };
export default App
