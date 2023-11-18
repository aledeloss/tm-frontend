import { Link } from 'react-router-dom';

interface ITaskItem {
  title: string;
  id: string;
}
const TaskItem = ({ title, id }: ITaskItem) => {
  return (
    <Link to={`/tasks/${id}`}>
      <span>{title}</span>
    </Link>
  );
};

export default TaskItem;
