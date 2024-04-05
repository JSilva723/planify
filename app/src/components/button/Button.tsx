import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    label: string
    active?: boolean
    end?: boolean
    onClick: (v: unknown) => void
}

export const Button = ({ label, active, end, onClick }: ButtonProps) => {
    const buttonStyles = [
        styles.button,
        active && styles.active,
        end && styles.end
    ].join(' ')

    return (
        <button
            onClick={onClick}
            className={buttonStyles}
        >
            {label}
        </button>
    )
}