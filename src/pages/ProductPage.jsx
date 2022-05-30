import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import ProductCard from '../components/productCard/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    const res = await fetch(
      `https://jellyfish-app-xdnzk.ondigitalocean.app/products`
    );
    const data = await res.json();
    const productWithId = data.data.filter(
      (product) => product.product_id == id
    );
    return productWithId;
  };

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );
  if (!data) {
    return <Loading></Loading>;
  }

  if (data) {
    return (
      <ProductCard
        img={data[0].foto_url}
        name={data[0].name}
        quantity_kg={data[0].quantity_kg}
        price={data[0].price}
        description={data[0].description}
        id={data[0].product_id}
      />
    );
  }
};

export default ProductPage;
