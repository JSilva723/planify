import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import styles from './TapItem.module.css'
import { AccordionContext } from '../tap/Tap'

export const TapItem = () => {
    const { setShow, show, title } = useContext(AccordionContext)

    return (
        <div className={styles.container}>
            <span>{title}</span>
            <button
                className={styles.button}
                onClick={() =>  setShow(!show)}
            >
                {show ? <FaMinus /> : <FaPlus />}
            </button>
        </div>
    )
}