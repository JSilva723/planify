import React from 'react'
import styles from './Content.module.css'

interface ContentProps {
    title: string
    children: React.ReactNode
}

export const Content = ({ title, children }: ContentProps) => {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </>
    )
}