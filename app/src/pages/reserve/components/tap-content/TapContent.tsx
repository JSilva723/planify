import React, { useContext } from 'react'
import { Button } from '@components/button/Button'
import styles from './TapContent.module.css'
import { Item } from '../../hooks/useGetServices'
import { AccordionContext } from '../tap/Tap'

export const TAP_CONTENT_SELECT_BUTTON = 'Select'
export const TAP_CONTAINER_ID = 'tap-container-id'

export const TapContent = ({ data }: { data: Item[] }) => {
    const { show } = useContext(AccordionContext)
    if (data.length === 0 || !show) return null

    return (
        <div className={styles.container} data-testid={TAP_CONTAINER_ID}>
            {data.map(({ id, name, description }) => {
                return (
                    <div key={id} className={styles.card}>
                        <span>{name}</span>
                        <span>{description}</span>
                        <Button label={TAP_CONTENT_SELECT_BUTTON} end />
                    </div>
                )
            })}
        </div>
    )
}