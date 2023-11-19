import { useEffect, useRef } from 'react';
import GenericInput from '../components/GenericInput';
import GenericLink from '../components/GenericLink';
import Wrapper from '../components/Wrapper';

const NewTask = () => {
  const formRef = useRef<HTMLFormElement | null>(undefined);
  const submitRef = useRef<HTMLButtonElement | null>(null);

  const addTask = async () => {
    const formData = formRef.current && new FormData(formRef.current);
    try {
      if (formData) {
        const response = await fetch('http://127.0.0.1:3000/tasks', {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) console.error('ups');
      }
    } catch (e) {
      console.error(e, 'ups');
    }
  };

  return (
    <Wrapper title='New task'>
      <form className=' w-full' ref={formRef}>
        <fieldset className='flex flex-col m-4'>
          <GenericInput name='title' label='Title' type='text' />
          <GenericInput
            name='description'
            label='Description'
            type='textarea'
          />
        </fieldset>
        <div className='flex justify-end'>
          <GenericLink redirectsTo='/' label='Go back' />
          <button
            type='button'
            className='btn-primary'
            onClick={() => addTask()}
            ref={submitRef}
          >
            OK
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default NewTask;
