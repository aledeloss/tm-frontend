import GenericLink from '../components/GenericLink';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import useFetch from '../hooks/useFetch';
import { ITask } from '../types';

const Tasks = () => {
  const tasks: ITask[] = useFetch('');

  return (
    <>
      <Header />
      <main>
        <h1>Your registered tasks</h1>
        <GenericLink redirectsTo='/add' label='Create new' />
        <div>
          {tasks.map((task) => {
            return <TaskItem title={task.title} id={task.id} key={task.id} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Tasks;
