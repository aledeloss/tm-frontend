import { useParams } from 'react-router';
import GenericLink from '../../components/GenericLink';
import Header from '../../components/Header';

function TaskDetail() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <main>
        <h1>Task 1</h1>
        <div>description</div>
        <GenericLink label='Go back' redirectsTo='/' />
        <button onClick={() => console.log('delete task', id)}>Delete</button>
      </main>
    </>
  );
}

export default TaskDetail;
