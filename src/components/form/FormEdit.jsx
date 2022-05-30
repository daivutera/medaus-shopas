import React, { useState } from 'react';
import Form from './Form';
import Button from '../button/Button';
import Input from '../input/Input';

const FormEdit = () => {
  const token = localStorage.getItem('token');
  const [fieldsToEdit, setFieldsToEdit] = useState({
    name: '',
    quantity_in_stock: '',
    price: '',
    foto_url: '',
    quantity_kg: '',
    description: '',
  });

  function createObjForFetch() {
    const body = {
      name: fieldsToEdit.name,
      quantity_in_stock: fieldsToEdit.quantity_in_stock,
      price: fieldsToEdit.price,
      foto_url: fieldsToEdit.foto_url,
      quantity_kg: fieldsToEdit.quantity_kg,
      description: fieldsToEdit.description,
    };
    console.log('body', JSON.stringify(body));
    return body;
  }
  async function FetchPatch() {
    const body = createObjForFetch();
    const resp = await fetch(
      'https://jellyfish-app-xdnzk.ondigitalocean.app/products/edit',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );
    const data = await resp.json();
    console.log('dataispatchfetch', data);
  }
  function onSubmit() {
    FetchPatch();
  }

  return (
    <Form
      formName='Pakeisti prekės duomenis'
      onSubmit={(e) => {
        e.preventDefault();
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

export default FormEdit;
