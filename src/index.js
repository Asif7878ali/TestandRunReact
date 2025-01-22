import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Form from './Component/Form';
import Registration from './Component/Registration';
import Welcome from './Component/Welcome';
import Modal from './Component/Modal';

const appRouting = createBrowserRouter([
       {
         path: '/',
         element: <App />,
         children: [
           {
             path: '/',
             element: <Form />
           },   
           {
              path: '/registration',
              element:  <Registration/>
            },   
            {
              path: '/welcome',
              element:  <Welcome/>
            },  
            {
              path: '/modal',
              element: <Modal/>
            },           
         ]
       }
     ])
     
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(<RouterProvider router={appRouting} />);

