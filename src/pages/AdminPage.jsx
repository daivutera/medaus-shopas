import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../components/header/HeaderAdmin';
import Header from '../components/header/HeaderAdmin';
import Loading from '../components/loading/Loading';
import ProductListAdmin from './../components/productList/ProductListAdmin';

const getData = async () => {
  const res = await fetch(
    `https://jellyfish-app-xdnzk.ondigitalocean.app/products`
  );
  const data = await res.json();
  return data.data;
};

const AdminPage = (props) => {
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
    return (
      <>
        <HeaderAdmin />
        <ProductListAdmin arr={[{ data }]} />;
      </>
    );
  }
};

export default AdminPage;
