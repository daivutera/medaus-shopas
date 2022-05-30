import React, { useState } from 'react';
import Form from './Form';
import Button from '../button/Button';
import Input from '../input/Input';

const FormAdd = () => {
  const [fieldsToAdd, setFieldsToAdd] = useState({
    name: '',
    quantity_in_stock: '',
    price: '',
    foto_url: '',
    quantity_kg: '',
    description: '',
  });

  function createObjForFetch() {
    const body = {
      name: fieldsToAdd.name,
      quantity_in_stock: fieldsToAdd.quantity_in_stock,
      price: fieldsToAdd.price,
      foto_url: fieldsToAdd.foto_url,
      quantity_kg: fieldsToAdd.quantity_kg,
      description: fieldsToAdd.description,
    };
    console.log('body', JSON.stringify(body));
    return body;
  }
  async function fetchAdd() {
    const body = createObjForFetch();
    const resp = await fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    console.log('dataispatchfetch', data);
  }
  function onSubmit() {
    fetchAdd();
  }

  return (
    <Form
      formName='Duomenys apie prekę'
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}>
      <Input
        type='text'
        name='name'
        id='name'
        placeholder='Prekės pavadinimas'
        handleChange={(name) => setFieldsToAdd({ ...fieldsToAdd, name })}
      />
      <Input
        type='number'
        name='quantity_in_stock'
        id='quantity_in_stock'
        placeholder='Prekės kiekis sandėlyje'
        handleChange={(quantity_in_stock) =>
          setFieldsToAdd({ ...fieldsToAdd, quantity_in_stock })
        }
      />
      <Input
        type='number'
        name='price'
        id='price'
        placeholder='Kaina'
        handleChange={(price) => setFieldsToAdd({ ...fieldsToAdd, price })}
      />
      <Input
        type='url'
        name='foto_url'
        id='foto_url'
        placeholder='Nuotraukos URL'
        handleChange={(foto_url) =>
          setFieldsToAdd({ ...fieldsToAdd, foto_url })
        }
      />
      <Input
        type='number'
        name='quantity_kg'
        id='quantity_kg'
        placeholder='Kiekis, kg'
        handleChange={(quantity_kg) =>
          setFieldsToAdd({ ...fieldsToAdd, quantity_kg })
        }
      />
      <Input
        type='text'
        name='description'
        id='description'
        placeholder='Prekės aprašymas'
        handleChange={(description) =>
          setFieldsToAdd({ ...fieldsToAdd, description })
        }
      />
      <div style={{ marginTop: '1rem' }}>
        <Button type='submit'>Pateikti duomenis</Button>
      </div>
    </Form>
  );
};

export default FormAdd;
