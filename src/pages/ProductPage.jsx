import React, { useEffect, useState } from 'react';
import ProductList from '../components/productList/ProductList';

const getData = async (id) => {
  console.log('product page fetch');

  const res = await fetch(
    `https://jellyfish-app-xdnzk.ondigitalocean.app/products`
  );
  const data = await res.json();
  console.log('dataoneproduct', data.data);
  const productWithId = data.filter((object) => [
    object.data.data.product_id === id,
  ]);
  console.log('productWithId', productWithId);
  return productWithId;
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
