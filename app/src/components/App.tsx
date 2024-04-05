import React from 'react'
import styles from './App.module.css'
import { Button } from './button/Button'
import { Link } from 'react-router-dom'

const INGRESS = 'Welcome'

export const App = () => {
    return (
        <div className={styles.container}>
            <Link to="service">
                <Button label={INGRESS} />
            </Link>
        </div>
    )
}