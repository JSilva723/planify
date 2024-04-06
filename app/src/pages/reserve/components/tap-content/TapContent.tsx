import React, { useContext } from 'react'
import { Button } from '@components/button/Button'
import styles from './TapContent.module.css'
import { Item } from '../../hooks/useGetServices'
import { AccordionContext } from '../tap/Tap'
import { ReserveContext } from '@pages/reserve/context/ReserveProvider'

export const TAP_CONTENT_SELECT_BUTTON = 'Select'
export const TAP_CONTAINER_ID = 'tap-container-id'

export const TapContent = ({ data }: { data: Item[] }) => {
    const { setService, service } = useContext(ReserveContext)
    const { show, title } = useContext(AccordionContext)
    if (data.length === 0 || !show) return null

    const handleSelect = (item: Item) => {
        if(service && service.id === item.id) {
            localStorage.removeItem('service')
            localStorage.removeItem('tap')
            return setService(null)
        }
        localStorage.setItem('service', JSON.stringify(item))
        localStorage.setItem('tap', JSON.stringify(title))
        setService(item)
    }

    return (
        <div className={styles.container} data-testid={TAP_CONTAINER_ID}>
            {data.map((item) => {
                return (
                    <div key={item.id} className={styles.card}>
                        <span>{item.name}</span>
                        <span>{item.description}</span>
                        <Button
                            label={TAP_CONTENT_SELECT_BUTTON}
                            end
                            onClick={() => handleSelect(item)}
                            active={service ? service.id === item.id : false}
                        />
                    </div>
                )
            })}
        </div>
    )
}