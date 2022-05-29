import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormEdit from '../components/form/FormEdit';
import Loading from '../components/loading/Loading';
import ProductCardEdit from '../components/productCard/ProductCardEdit';
import CartContext from './../context/CartContext';

const ProductPageEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const inputContext = useContext(CartContext);
  const [inputData, setInputData] = useState(inputContext.editInputs);
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
  const collectedDataFromInputs = {
    name: inputData.name,
    quantity_in_stock: inputData.quantity_in_stock,
    price: inputData.price,
    foto_url: inputData.foto_url,
    quantity_kg: inputData.quantity_kg,
    description: inputData.description,
  };
  function createObjForFetch() {
    const body = collectedDataFromInputs;
    console.log('body', body);
    return body;
  }

  const inputs = useEffect(
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
              console.log('fetchint reiks', collectedDataFromInputs);
              createObjForFetch();
            }}
          />
        </div>
      </div>
    );
  }
};

export default ProductPageEdit;
