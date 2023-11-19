import React from 'react';

interface IGenericInput {
  name: string;
  label: string;
  type: string;
}
const GenericInput = ({ name, label, type }: IGenericInput) => {
  const styles = 'w-full border border-green rounded p-2';

  return (
    <div className='flex m-2'>
      <label className='w-48 text-left' htmlFor={name}>
        {label}:
      </label>
      {type === 'text' && (
        <input className={styles} type={type} name={name}></input>
      )}
      {type === 'textarea' && (
        <textarea className={styles} name={name}></textarea>
      )}
    </div>
  );
};

export default GenericInput;
