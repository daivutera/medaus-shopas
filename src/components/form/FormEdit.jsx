import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from '../button/Button';
import Input from '../input/Input';
import CartContext from '../../context/CartContext';

const FormEdit = ({ onSubmit }) => {
  const context = useContext(CartContext);
  const [fieldsToEdit, setFieldsToEdit] = useState({
    name: '',
    quantity_in_stock: '',
    price: '',
    foto_url: '',
    quantity_kg: '',
    description: '',
  });
  function saveInputsToContext() {
    context.setEditInputsFunc(fieldsToEdit);
    console.log('fieldsToEdit', fieldsToEdit);
  }

  return (
    <Form
      formName='Pakeisti prekės duomenis'
      onSubmit={(e) => {
        e.preventDefault();
        saveInputsToContext();
        onSubmit();
      }}>
      <Input
        type='text'
        name='name'
        id='name'
        placeholder='Prekės pavadinimas'
        handleChange={(name) => setFieldsToEdit({ ...fieldsToEdit, name })}
      />
      <Input
        type='number'
        name='quantity_in_stock'
        id='quantity_in_stock'
        placeholder='Prekės kiekis sandėlyje'
        handleChange={(quantity_in_stock) =>
          setFieldsToEdit({ ...fieldsToEdit, quantity_in_stock })
        }
      />
      <Input
        type='number'
        name='price'
        id='price'
        placeholder='Kaina'
        handleChange={(price) => setFieldsToEdit({ ...fieldsToEdit, price })}
      />
      <Input
        type='url'
        name='foto_url'
        id='foto_url'
        placeholder='Nuotraukos URL'
        handleChange={(foto_url) =>
          setFieldsToEdit({ ...fieldsToEdit, foto_url })
        }
      />
      <Input
        type='number'
        name='quantity_kg'
        id='quantity_kg'
        placeholder='Kiekis, kg'
        handleChange={(quantity_kg) =>
          setFieldsToEdit({ ...fieldsToEdit, quantity_kg })
        }
      />
      <Input
        type='text'
        name='description'
        id='description'
        placeholder='Prekės aprašymas'
        handleChange={(description) =>
          setFieldsToEdit({ ...fieldsToEdit, description })
        }
      />
      <div style={{ marginTop: '1rem' }}>
        <Button type='submit'>Atnaujinti duomenis</Button>
      </div>
    </Form>
  );
};

FormEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormEdit;
