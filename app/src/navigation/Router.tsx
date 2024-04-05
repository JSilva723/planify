import React from 'react'
import { createHashRouter } from 'react-router-dom'
import { NotFound } from '@pages/not-found/NotFound'
import { MyTurns } from '@pages/my-turns/MyTurns'
import { Welcome } from '@pages/welcome/Welcome'
import { Reserve } from '@pages/reserve/Reserve'

export const router = createHashRouter([
    {
        path: '/',
        element: <Welcome />,
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