import React from 'react'
import styles from './Paginator.module.css'

export const Paginator = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}