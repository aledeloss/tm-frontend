import GenericLink from '../components/GenericLink';
import TaskItem from '../components/TaskItem';
import Wrapper from '../components/Wrapper';
import useFetch from '../hooks/useFetch';
import { ITask } from '../types';

const Tasks = () => {
  const tasks: ITask[] = useFetch('');

  return (
    <Wrapper title='Your registered tasks'>
      <>
        <div className='flex flex-col w-full'>
          {tasks.map((task) => {
            return <TaskItem title={task.title} id={task.id} key={task.id} />;
          })}
        </div>
        <GenericLink redirectsTo='/add' label='Create new' />
      </>
    </Wrapper>
  );
};

export default Tasks;
