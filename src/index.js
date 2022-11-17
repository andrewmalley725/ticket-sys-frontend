import React from 'react';
import ReactDOM from 'react-dom/client';
import ViewTickets from './components/viewtickets';
import AddEmp from './components/addemp';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import NavBar from './components/nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewTickets/>,
  },
  {
    path: '/addemp',
    element: <AddEmp/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <NavBar/>
      <RouterProvider router={router} />
  </div>
);
