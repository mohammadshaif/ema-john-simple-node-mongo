import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    //const product = fakeData.find(pd => pd.key === productKey);
    const [product, setProduct] = useState(null);

    useEffect(()=>{
            fetch('http://localhost:3000/product/'+productKey)
            .then(response => response.json())
            .then(data => {
                setProduct(data)
        })
    },[])
    
    return (
        <div>
            <h1>Your Product Details.</h1>
              { product &&
                  <Product showAddToCart={false} product={product}></Product>
                  }
        </div>
    );
};

export default ProductDetail;