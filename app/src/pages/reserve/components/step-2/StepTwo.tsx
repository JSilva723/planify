import React, { useContext, useEffect, useState } from 'react'
import { Content } from '@components/content/Content'
import { ReserveContext, Schedule } from '@pages/reserve/context/ReserveProvider'
import { Slot, useGetSlots } from '@pages/reserve/hooks/useGetSlots'
import { Button } from '@components/button/Button'
import styles from './StepTwo.module.css'
import { Paginator } from '@components/paginator/Paginator'
import { useGoToStep } from '@pages/reserve/hooks/useGoToStep'

const SCHEDULE_TITLE_CONTENT = 'Next turns'

export const StepTwo = () => {
    const { step, schedule, setSchedule } = useContext(ReserveContext)
    if (step && step.id !== 2) return null

    const getServices = useGetSlots()
    const goToStep = useGoToStep()
    const [slots, setSlots] = useState<Slot[]>([])

    useEffect(() => {
        getServices()
            .then(res => setSlots(res))
            .catch(e => console.log(e)) //eslint-disable-line no-console
    }, [])

    const handleSelect = (item: Schedule) => {
        setSchedule(item)
        localStorage.setItem('schedule', JSON.stringify(item))
    }

    return (
        <>
            <Content title={SCHEDULE_TITLE_CONTENT}>
                {slots.map((slot: Slot) => {
                    return (
                        <>
                            <p>{slot.date}</p>
                            <div className={styles.container}>
                                {
                                    slot.available.map((hour: string) => {
                                        return (
                                            <Button
                                                key={hour + slot.date}
                                                label={hour}
                                                onClick={() => handleSelect({date: slot.date, hour})}
                                                active={schedule
                                                    ? schedule.date === slot.date && schedule.hour === hour
                                                    : false
                                                }
                                            />
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })}
            </Content>
            <Paginator>
                <Button
                    label="Prev"
                    onClick={() => goToStep(1)}
                    active
                />
                <Button
                    label="Next"
                    onClick={() => goToStep(3)}
                    active={schedule ? true : false}
                />
            </Paginator>
        </>
    )
}