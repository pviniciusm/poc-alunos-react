import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Projects from '../pages/Projects';
import Login from '../pages/Login';
import { CreateProject } from '../pages/CreateProject';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/projects',
        element: <Projects />,
        errorElement: <ErrorPage />
    },
    {
        path: '/projects/add',
        element: <CreateProject />,
        errorElement: <ErrorPage />
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />
    }
]);

const RoutesApp: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default RoutesApp;
