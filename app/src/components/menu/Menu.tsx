import React from 'react'
import styles from './Menu.module.css'
import { FaCoffee } from 'react-icons/fa'

const RESERVE = 'Reserve'
const MY_TURNS = 'Mis turnos'

export const Menu = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <FaCoffee />
                <span>{RESERVE}</span>
            </button>
            <button className={styles.button}>
                <FaCoffee />
                <span>{MY_TURNS}</span>
            </button>
        </div>
    )
}