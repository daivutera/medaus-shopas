import React, { useContext, useEffect, useState } from 'react';
import FormEditAdd from '../components/form/FormAdd';
import HeaderAdmin from './../components/header/HeaderAdmin';
import ContainerForPageContent from '../components/containers/ContainerForPageContent';

const AddPage = () => {
  return (
    <>
      <HeaderAdmin />
      <ContainerForPageContent>
        <FormEditAdd />
      </ContainerForPageContent>
    </>
  );
};

export default AddPage;
