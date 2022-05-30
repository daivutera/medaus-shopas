import React, { useState } from 'react';
import Form from './Form';
import Button from '../button/Button';
import Input from '../input/Input';
import Message from '../message/Message';
import { useParams } from 'react-router-dom';

const FormEdit = () => {
  const token = localStorage.getItem('token');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
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
      product_id: id,
      updatedInfoArr: [
        { name: 'name', value: fieldsToEdit.name },
        { name: 'quantity_in_stock', value: fieldsToEdit.quantity_in_stock },
        { name: 'price', value: fieldsToEdit.price },
        { name: 'foto_url', value: fieldsToEdit.foto_url },
        { name: 'quantity_kg', value: fieldsToEdit.quantity_kg },
        { name: 'description', value: fieldsToEdit.description },
      ],
    };
    return body;
  }
  async function FetchPatch() {
    setError(false);
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
    console.log(JSON.stringify(body));
    const data = await resp.json();
    console.log(data);
    if (data === false) {
      setError(true);
    } else {
      setSuccess(true);
    }
  }
  function onSubmit() {
    setSuccess(false);
    FetchPatch();
    setSuccess(true);
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
      {success && <Message color='green'>Jūsų prekė buvo patalpinta</Message>}
      {error && <Message color='red'>Įvyko klaida, duomenys neįrašyti</Message>}
      <div style={{ marginTop: '1rem' }}>
        <Button type='submit'>Atnaujinti duomenis</Button>
      </div>
    </Form>
  );
};

export default FormEdit;
