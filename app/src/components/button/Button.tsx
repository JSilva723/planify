import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    label: string
    active?: boolean
    end?: boolean
}

export const Button = ({ label, active, end }: ButtonProps) => {
    const buttonStyles = [
        styles.button,
        active && styles.active,
        end && styles.end
    ].join(' ')

    return (
        <button className={buttonStyles}>{label}</button>
    )
}