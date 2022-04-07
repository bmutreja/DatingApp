import './App.css';
import { BrowserRouter as Router, Switch, Routes,Route ,Link, useParams, NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import PageNotFound from './components/PageNotFound';
import TopProducts from './components/TopProducts';
import FeaturdProducts from './components/FeaturdProducts';
import Feature1 from '../src/components/Feature1';
import Feature2 from './components/Feature2';
import React from 'react';
const LazyLoad = React.lazy(() => import('./components/About'));


function App() {
  return (
   <>
           <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="shop">shop</NavLink>
                <NavLink to="product">Product</NavLink>
                <NavLink to="product/:proId">SIngleProduct</NavLink>
            
            </ul>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="shop"  element={<Shop/>}/>
        <Route path="about"   element={
        <React.Suspense fallback="Loading...">
        <LazyLoad/>
        </React.Suspense>
        }/>
        <Route path='register'  element={<Register/>} />
        <Route path='login' element={<Login/>} />
        <Route path='product' element={<Products/>} />
        <Route path='product/:rootId' element={<Products/>} >
          {/* this index is use for the display child element it will pic only one component */}
          <Route index element={<Feature1/>}/>
          <Route path='topproducts' element={<TopProducts/>} />
          <Route path='featuredproduct' element={<FeaturdProducts/>} >
            <Route path="feature1" element={<Feature1 />} />
            <Route path="feature2"  element={<Feature2/>} />
          </Route>
        </Route>
        <Route path='*'  element={ <PageNotFound/>} />
      </Routes>
   </>
  );
}

export default App;
