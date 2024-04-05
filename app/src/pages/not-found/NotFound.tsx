import React from 'react'
import styles from './NotFound.module.css'
import { Button } from '@components/button/Button'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h1>Ups</h1>
            <Button 
                label='Go to Reserve'
                active
                onClick={() => navigate('reserve')}
            />
        </div>
    )
}