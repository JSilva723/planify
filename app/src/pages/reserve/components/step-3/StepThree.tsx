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
        localStorage.clear()
        navigate('/my-turns')
    }

    return (
        <>
            <Content title={''}>
                {service && <p><b>Service:</b> {service.name}</p>}
                {schedule && <p><b>Date:</b> {schedule.date}</p>}
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