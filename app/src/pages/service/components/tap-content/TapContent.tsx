import React, { useContext } from 'react'
import styles from './TapContent.module.css'
import { Item } from '@pages/service/hooks/useGetServices'
import { AccordionContext } from '../tap/Tap'

export const TapContent = ({ data }: { data: Item[] }) => {
    const { show } = useContext(AccordionContext)
    if (data.length === 0 || !show) return null
    return (
        <div className={styles.container}>
            {data.map(({ id, name, description }) => {
                return (
                    <div key={id} className={styles.card}>
                        <span>{name}</span>
                        <span>{description}</span>
                        <button>Select</button>
                    </div>
                )
            })}
        </div>
    )
}