import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from '@pages/not-found/NotFound'
import { Service } from '@pages/service/Service'
import { MyTurns } from '@pages/my-turns/MyTurns'
import { Welcome } from '@pages/welcome/Welcome'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />,
        errorElement: <NotFound />
    },
    {
        path: '/service',
        element: <Service />,
    },
    {
        path: '/my-turns',
        element: <MyTurns />,
    }
])