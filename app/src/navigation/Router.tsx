import React from 'react'
import { App } from '@components/App'
import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from '@pages/not-found/NotFound'
import { Service } from '@pages/service/Service'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />
    },
    {
        path: '/service',
        element: <Service />,
    }
])