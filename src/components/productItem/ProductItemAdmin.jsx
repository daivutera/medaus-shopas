import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import * as S from './ProductItemAdmin.style';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ProductItemAdmin = ({ img, name, quantity, price, id, unique_id }) => {
  const Navigate = useNavigate();

  function onClickDelete(e) {
    e.stopPropagation();
    console.log('paspaude');
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Trinti?</h1>
            <p>Ar tikrai norite ištrinti šią prekę?</p>
            <button onClick={onClose}>Ne</button>
            <button
              onClick={() => {
                deleteItemFromDb(id);
                alert('Ištrinta');
                onClose();
              }}>
              Taip!
            </button>
          </div>
        );
      },
    });
  }
  function onClickEdit(e) {
    e.stopPropagation();
    Navigate('/edit');
  }
  async function deleteItemFromDb(id) {
    console.log('bandau delete fetchinti');
    const itemToDelete = { product_id: id };
    console.log(itemToDelete, 'itemtodelete');

    const res = await fetch(
      `https://jellyfish-app-xdnzk.ondigitalocean.app/products/delete`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: id }),
      }
    );
    const data = await res.json();
    console.log('data', data);
    return data;
  }

  return (
    <S.Div>
      <img src={img} alt={name} />
      <div>
        <S.H3>
          {name} {quantity} kg {price} €
        </S.H3>
        <Button color='secondary' onClick={onClickDelete}>
          Delete
        </Button>
        <Button color='secondary' onClick={onClickEdit}>
          Edit
        </Button>
      </div>
    </S.Div>
  );
};

ProductItemAdmin.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  unique_id: PropTypes.node.isRequired,
};

export default ProductItemAdmin;
