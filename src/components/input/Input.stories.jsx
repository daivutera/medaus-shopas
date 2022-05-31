import React from 'react';
import Input from './Input';

export const InputStories = () => {
  return (
    <Input
      type='text'
      name='tekstas'
      id='tekstas'
      placeholder='tekstas'
      label='tekstas'
    />
  );
};

export default {
  title: 'Input',
  component: Input,
};
