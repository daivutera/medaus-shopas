import React, { useEffect, useState } from 'react';
import Loading from '../components/loading/Loading';
import ProductList from '../components/productList/ProductList';

const getData = async () => {
  const res = await fetch(
    `https://jellyfish-app-xdnzk.ondigitalocean.app/products`
  );
  const data = await res.json();
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
    return <Loading />;
  }

  if (data) {
    return <ProductList arr={[{ data }]} />;
  }
};

export default ProductPage;
