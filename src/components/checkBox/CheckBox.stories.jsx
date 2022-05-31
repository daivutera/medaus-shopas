import React from 'react';
import CheckBox from './CheckBox';

export const CheckboxStories = () => {
  return (
    <CheckBox id='saskaita' name='saskaita'>
      Ar reikės sąskaitos?
    </CheckBox>
  );
};

export default {
  title: 'Checkbox',
  component: CheckBox,
};
