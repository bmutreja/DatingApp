import React from 'react';
import { Link , Outlet} from 'react-router-dom';

function FeaturdProducts(props) {
    return (
        <div>
            <h2>Featurd Product</h2>
            <Link to="feature1">feature 1</Link>
            <Link to="feature2">feature 2</Link>
            <Outlet/>
        </div>
    );
}

export default FeaturdProducts;