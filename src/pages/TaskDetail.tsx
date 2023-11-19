import { useParams } from 'react-router';
import GenericLink from '../components/GenericLink';
import Wrapper from '../components/Wrapper';
import useFetch from '../hooks/useFetch';
import { ITask } from '../types';

function TaskDetail() {
  const { id } = useParams();
  const tasks: ITask[] = useFetch('');
  const task = tasks.find((task) => task.id === id);

  const deleteTask = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) console.error('ups');
    } catch (e) {
      console.error(e, 'ups');
    }
  };

  return (
    <Wrapper title={task?.title ?? ''}>
      <>
        <div className='w-full m-4 p-4 text-left h-full rounded border border-green'>
          {task?.description}
        </div>
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
