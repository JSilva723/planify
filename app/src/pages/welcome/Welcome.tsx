import React from 'react'
import styles from './Welcome.module.css'
import { Link } from 'react-router-dom'

const INGRESS = 'Welcome'

export const Welcome = () => {
    return (
        <div className={styles.container}>
            <Link to="reserve">
                {INGRESS}
            </Link>
        </div>
    )
}