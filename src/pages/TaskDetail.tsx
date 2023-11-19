import { useParams } from 'react-router';
import GenericLink from '../components/GenericLink';
import Wrapper from '../components/Wrapper';
import GenericButton from '../components/GenericButton';

function TaskDetail() {
  const { id } = useParams();
  const task = {
    id: id,
    title: 'Clean the house',
    description: 'A lot to do',
  };
  return (
    <Wrapper title={task.title}>
      <>
        <div className='w-full m-4 p-4 text-left h-full rounded border border-green'>
          {task.description}
        </div>
        <div className='flex m-4 justify-end w-full'>
          <GenericLink label='Go back' redirectsTo='/' />
          <GenericButton
            label='Delete'
            action={() => console.log('delete task', id)}
          />
        </div>
      </>
    </Wrapper>
  );
}

export default TaskDetail;
