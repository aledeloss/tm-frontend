import { Link } from 'react-router-dom';

interface ITaskItem {
  title: string;
  id: string;
}
const TaskItem = ({ title, id }: ITaskItem) => {
  return (
    <Link
      className='border border-solid border-green rounded md px-4 py-2 m-4 text-left'
      to={`/tasks/${id}`}
    >
      <span>{title}</span>
    </Link>
  );
};

export default TaskItem;
