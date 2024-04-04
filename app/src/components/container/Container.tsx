import React from 'react'
import styles from './Container.module.css'
import { Menu } from '@components/menu/Menu'

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            {children}
            <Menu />
        </div>
    )
}