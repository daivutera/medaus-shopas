import React from 'react';
import PropTypes from 'prop-types';
import Container from '../containers/Container';
import ProductItem from '../productItem/ProductItem';

const ProductList = ({ arr }) => {
  console.log(arr, 'arr');
  return (
    <Container>
      {!arr.length && <div>No any items in e-store</div>}
      {arr[0].data.map((product) => (
        <ProductItem
          key={product.product_id}
          img={product.foto_url}
          name={product.name}
          quantity={product.quantity_kg}
          price={product.price}
        />
      ))}
    </Container>
  );
};

ProductList.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default ProductList;
