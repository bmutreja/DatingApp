import React from 'react';
import { Link, Outlet,useParams, useSearchParams } from 'react-router-dom';

function Products(props) {


    const [filter, setFilter] = useSearchParams();
    const showActiveUsers = filter.get('filter') == 'active';

   let params =  useParams();
   console.log("params",params)
   let proId = params.rootId; 
//    console.log(proId);
    return (
        <div>
            <h2>Products id: {proId}</h2>
            <Link to="topproducts">Top Products</Link>
            <Link to="featuredproduct">Feature Product</Link>
            <Outlet />

            <input type="submit" onClick={()=> setFilter({filter:'active'})} value="Serach filter" />
            <input type="submit" onClick={()=> setFilter({})} value="Reset Filter" />
            <p>{
                showActiveUsers ? "user active " : "not active"
                }</p>
        </div>
    );
}

export default Products;