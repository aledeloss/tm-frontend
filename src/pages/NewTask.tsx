import GenericInput from '../components/GenericInput';
import Header from '../components/Header';

const NewTask = () => {
  return (
    <>
      <Header />
      <main>
        <h1>New task</h1>
        <form>
          <GenericInput name='Title' label='Title' type='text' />
          <GenericInput
            name='Description'
            label='Description'
            type='textarea'
          />
          <button onSubmit={() => console.log('submit')}>OK</button>
        </form>
      </main>
    </>
  );
};

export default NewTask;
