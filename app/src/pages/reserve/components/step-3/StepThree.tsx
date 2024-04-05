import React, { useContext } from 'react'
import { Content } from '@components/content/Content'
import { ReserveContext } from '@pages/reserve/context/ReserveProvider'
import { Paginator } from '@components/paginator/Paginator'
import { Button } from '@components/button/Button'
import { useNavigate } from 'react-router-dom'

export const StepThree = () => {
    const { step, service, schedule } = useContext(ReserveContext)
    if (step && step.id !== 3) return null

    const navigate = useNavigate()

    const handleConfirm = () => {
        localStorage.removeItem('service')
        localStorage.removeItem('schedule')
        localStorage.removeItem('step')
        navigate('/my-turns')
    }

    return (
        <>
            <Content title={''}>
                {service && <div>Service: {service.name}</div>}
                {schedule && <div>Date: {schedule.date}</div>}
            </Content>
            <Paginator>
                <Button
                    label="Prev"
                    onClick={() => { }}
                />
                <Button
                    label="Confirm"
                    onClick={handleConfirm}
                    active
                />
            </Paginator>
        </>
    )
}