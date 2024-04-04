import React from 'react'
import styles from './Paginator.module.css'
import { Button } from '@components/button/Button'

const PREV = 'Prev'
const NETX = 'Next'

export const Paginator = () => {
    return (
        <div className={styles.container}>
            <Button label={PREV} />
            <Button label={NETX} active/>
        </div>
    )
}