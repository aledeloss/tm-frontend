import GenericLink from '../components/GenericLink';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import { ITask } from '../types';

const Tasks = () => {
  const tasks: ITask[] = [
    {
      id: '1',
      title: 'Home test',
      description: 'blablabla',
    },
    {
      id: '2',
      title: 'Home test 2',
      description: 'blablabla',
    },
  ];

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
