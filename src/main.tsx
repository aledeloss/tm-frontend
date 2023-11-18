import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tasks from './pages/Tasks';
import NewTask from './pages/NewTask';
import TaskDetail from './pages/TaskDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Tasks />,
  },
  {
    path: '/add',
    element: <NewTask />,
  },
  {
    path: '/tasks/:id',
    element: <TaskDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
