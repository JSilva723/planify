import React from 'react'
import styles from './Menu.module.css'
import { FaCoffee } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { MENU_ITEMS } from './Menu.utils'

export const Menu = () => {
    const location = useLocation()

    const getClassName = (path: string) => {
        const isActive = path === location.pathname
        return [styles.button, isActive && styles.active].join(' ')
    }

    return (
        <div className={styles.container}>
            {MENU_ITEMS.map(mi => (
                <Link
                    key={mi.path}
                    to={mi.path}
                    className={getClassName(mi.path)}
                >
                    <FaCoffee />
                    <span>{mi.label}</span>
                </Link>
            ))}
        </div>
    )
}