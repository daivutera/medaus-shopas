import React, { useEffect, useState } from 'react';
import ProductList from '../components/productList/ProductList';

const getData = async () => {
  console.log('bandau fetchinti');
  const res = await fetch(
    `https://jellyfish-app-xdnzk.ondigitalocean.app/products`
  );
  const data = await res.json();
  console.log('data', data.data);
  return data.data;
};

const ProductPage = () => {
  const [data, setData] = useState();

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );

  if (!data) {
    return <div>Loading</div>;
  }

  if (data) {
    return <ProductList arr={[{ data }]} />;
  }
};

export default ProductPage;