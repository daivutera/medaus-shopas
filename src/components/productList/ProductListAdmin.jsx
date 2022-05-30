import React from 'react';
import PropTypes from 'prop-types';
import Container from '../containers/Container';
import ProductItemAdmin from '../productItem/ProductItemAdmin';
import { v4 as uuid } from 'uuid';

const ProductListAdmin = ({ arr }) => {
  return (
    <Container>
      {!arr.length && <div>No any items in e-store</div>}
      {arr[0].data.map((product) => (
        <ProductItemAdmin
          key={product.product_id}
          img={product.foto_url}
          name={product.name}
          quantity={product.quantity_kg}
          price={product.price}
          id={product.product_id}
          unique_id={uuid()}
        />
      ))}
    </Container>
  );
};

ProductListAdmin.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default ProductListAdmin;
