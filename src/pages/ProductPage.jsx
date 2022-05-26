import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/productCard/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    console.log('product page fetch');
    console.log('id product page', id);
    const res = await fetch(
      `https://jellyfish-app-xdnzk.ondigitalocean.app/products`
    );
    const data = await res.json();
    const productWithId = data.data.filter(
      (product) => product.product_id == id
    );
    console.log('productWithId', productWithId);
    return productWithId;
  };

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );
  console.log(data, 'data kur tiktinu');
  if (!data) {
    return <div>Loading</div>;
  }

  if (data) {
    return (
      <ProductCard
        img={data[0].foto_url}
        name={data[0].name}
        quantity={data[0].quantity_kg}
        price={data[0].price}
        description={data[0].description}
      />
    );
  }
};

export default ProductPage;
