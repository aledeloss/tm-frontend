import { useNavigate, useParams } from 'react-router';
import GenericLink from '../components/GenericLink';
import Wrapper from '../components/Wrapper';
import useFetch from '../hooks/useFetch';
import { ITask } from '../types';
import { useState } from 'react';

function TaskDetail() {
  const { id } = useParams();
  const tasks: ITask[] = useFetch('');
  const task = tasks.find((task) => task.id === id);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const errorMessageString = 'Something went wrong';
  const deleteTask = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) setErrorMessage(errorMessageString);
      return navigate('/');
    } catch (e) {
      setErrorMessage(errorMessageString);
    }
  };

  return (
    <Wrapper title={task?.title ?? ''}>
      <>
        {' '}
        {task?.description && (
          <div className='w-full m-4 p-4 text-left h-full rounded border border-green'>
            {task?.description}
          </div>
        )}
        {errorMessage && (
          <div className='w-full text-sm text-left'>{errorMessage}</div>
        )}
        <div className='flex m-4 justify-end w-full'>
          <GenericLink label='Go back' redirectsTo='/' />
          <button className='btn-primary' onClick={() => deleteTask()}>
            Delete
          </button>
        </div>
      </>
    </Wrapper>
  );
}

export default TaskDetail;
