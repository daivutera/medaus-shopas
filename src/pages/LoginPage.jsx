import React, { useContext, useEffect, useState } from 'react';
import ContainerForPageContent from '../components/containers/ContainerForPageContent';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Message from './../components/message/Message';
import Button from '../components/button/Button';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState(false);
  const [errorFromDb, setErrorFromDb] = useState(false);
  const Navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  });
  const URLlogin = 'https://jellyfish-app-xdnzk.ondigitalocean.app/login';
  useEffect(() => {
    if (userDetails.username.length && userDetails.password.length) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [userDetails]);

  async function formHandler() {
    setErrorFromDb(false);
    if (userDetails.username.length && userDetails.password.length) {
      setError(false);
    } else {
      setError(true);
    }
    const body = {
      username: userDetails.username,
      password: userDetails.password,
    };
    if (formValid) {
      const data = await fetch(URLlogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const dataJson = await data.json();
      console.log(dataJson);
      if (dataJson.success === false) {
        setErrorFromDb(true);
      } else {
        setError(false);
        localStorage.setItem('token', dataJson.data);
        authCtx.login();
        Navigate('/admin');
      }
    }
  }
  return (
    <ContainerForPageContent>
      <Form
        formName='Prisijunkite'
        onSubmit={(e) => {
          e.preventDefault();
          formHandler();
        }}>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='vartotojas'
          handleChange={(username) =>
            setUserDetails({ ...userDetails, username })
          }
        />
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='slaptažodis'
          handleChange={(password) =>
            setUserDetails({ ...userDetails, password })
          }
        />
        {error && <Message color='red'>Neužpildyti visi laukai</Message>}
        {errorFromDb && (
          <Message color='red'>
            Netinkamas slaptažodis arba vartotojo vardas
          </Message>
        )}
        <Button type='submit'>Prisijungti</Button>
      </Form>
    </ContainerForPageContent>
  );
};

export default LoginPage;
