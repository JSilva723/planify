import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import styles from './TapItem.module.css'
import { AccordionContext } from '../tap/Tap'

export const TapItem = ({ title }: { title: string }) => {
    const { setShow, show } = useContext(AccordionContext)
    return (
        <div className={styles.container}>
            <span>{title}</span>
            <button
                className={styles.button}
                onClick={() => setShow(!show)}
            >
                <FaPlus />
            </button>
        </div>
    )
}