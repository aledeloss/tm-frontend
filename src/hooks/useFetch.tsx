import { useEffect, useState } from 'react';
import { ITask } from '../types';

const useFetch = ({ relativePath = '' }: { relativePath?: string }) => {
  const [data, setData] = useState<ITask[]>([]);
  const url = `http://127.0.0.1:3000/tasks${relativePath}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch(console.log);
  }, []);
  return data;
};

export default useFetch;
