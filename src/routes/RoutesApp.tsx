import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Projects from '../pages/Projects';
import Login from '../pages/Login';

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
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />
    }
]);

const RoutesApp: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default RoutesApp;
