import React from 'react';

interface IGenericInput {
  name: string;
  label: string;
  type: string;
}
const GenericInput = ({ name, label, type }: IGenericInput) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name}></input>
    </>
  );
};

export default GenericInput;
