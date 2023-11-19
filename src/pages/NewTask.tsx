import GenericInput from '../components/GenericInput';
import GenericLink from '../components/GenericLink';
import Wrapper from '../components/Wrapper';

const NewTask = () => {
  return (
    <Wrapper title='New task'>
      <form className=' w-full'>
        <fieldset className='flex flex-col m-4'>
          <GenericInput name='Title' label='Title' type='text' />
          <GenericInput
            name='Description'
            label='Description'
            type='textarea'
          />
        </fieldset>
        <div className='flex justify-end'>
          <GenericLink redirectsTo='/' label='Go back' />
          <input type='submit' value='Ok' className='btn-primary' />
        </div>
      </form>
    </Wrapper>
  );
};

export default NewTask;
