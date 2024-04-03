import React from 'react'
import styles from './ProgressBar.module.css'

interface ProgressBarProps {
    step: 1 | 2 | 3 
}

const STEPS = 4

export const ProgressBar = ({ step }: ProgressBarProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.progress} style={{ width: `${step * 100 / STEPS}%` }} />
        </div>
    )
}