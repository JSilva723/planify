import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    label: string
    active?: boolean
}

export const Button = ({ label, active }: ButtonProps) => {
    const buttonStyles = [styles.button, active && styles.active].join(' ')
    return (
        <button className={buttonStyles}>{label}</button>
    )
}