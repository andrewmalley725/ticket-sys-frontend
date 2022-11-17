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
import AddCust from './components/addcust';
import AddTicket from './components/addticket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewTickets/>,
  },
  {
    path: '/addemp',
    element: <AddEmp/>,
  },
  {
    path: '/addcust',
    element: <AddCust/>,
  },
  {
    path: '/addticket',
    element: <AddTicket/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <NavBar/>
      <RouterProvider router={router} />
  </div>
);
