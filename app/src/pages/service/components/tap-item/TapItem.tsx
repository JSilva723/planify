import React, { useContext } from 'react'
import styles from './TapItem.module.css'
import { AccordionContext } from '../tap/Tap'

export const TapItem = ({ title }: { title: string }) => {
    const { setShow, show } = useContext(AccordionContext)
    return (
        <div className={styles.container}>
            <span>{title}</span>
            <button onClick={() => setShow(!show)}>mas</button>
        </div>
    )
}