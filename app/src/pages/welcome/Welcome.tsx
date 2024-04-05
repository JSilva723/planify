import React from 'react'
import styles from './Welcome.module.css'
import { Link } from 'react-router-dom'
import { Button } from '@components/button/Button'

const INGRESS = 'Welcome'

export const Welcome = () => {
    return (
        <div className={styles.container}>
            <Link to="reserve">
                <Button label={INGRESS} />
            </Link>
        </div>
    )
}