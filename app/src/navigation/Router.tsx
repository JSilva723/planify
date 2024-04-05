import React from 'react'
import { Navigate, createHashRouter } from 'react-router-dom'
import { NotFound } from '@pages/not-found/NotFound'
import { MyTurns } from '@pages/my-turns/MyTurns'
import { Reserve } from '@pages/reserve/Reserve'

export const router = createHashRouter([
    {
        path: '/',
        element: <Navigate to="reserve" replace/>,
        errorElement: <NotFound />
    },
    {
        path: '/reserve',
        element: <Reserve />,
    },
    {
        path: '/my-turns',
        element: <MyTurns />,
    }
])