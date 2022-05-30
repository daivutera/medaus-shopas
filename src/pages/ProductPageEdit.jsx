import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormEdit from '../components/form/FormEdit';
import Loading from '../components/loading/Loading';
import ProductCardEdit from '../components/productCard/ProductCardEdit';
import HeaderAdmin from './../components/header/HeaderAdmin';

const ProductPageEdit = () => {
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
      <>
        <HeaderAdmin />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div style={{ maxWidth: '40rem' }}>
            <ProductCardEdit
              img={data[0].foto_url}
              name={data[0].name}
              quantity_kg={data[0].quantity_kg}
              price={data[0].price}
              description={data[0].description}
              id={data[0].product_id}
            />
          </div>
          <div style={{ width: '35rem' }}>
            <FormEdit
              onSubmit={() => {
                console.log('fetchint reiks');
              }}
            />
          </div>
        </div>
      </>
    );
  }
};

export default ProductPageEdit;
