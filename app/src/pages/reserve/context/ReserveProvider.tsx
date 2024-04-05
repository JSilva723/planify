import { Container } from '@components/container/Container'
import { ProgressBar } from '@components/progress-bar/ProgressBar'
import { Title } from '@components/title/Title'
import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

type Step = {
    id: number
    title: string
}

type Service = {
    id: number
    name: string
    description: string
}

export type Schedule = {
    date: string
    hour: string
}

type TypeReserve = {
    step: Step
    setStep: Dispatch<SetStateAction<Step>>
    service: Service | null
    setService: Dispatch<SetStateAction<Service | null>>
    schedule: Schedule | null
    setSchedule: Dispatch<SetStateAction<Schedule | null>>
}

const SERVICE_TITTLE_PAGE = 'Select service'
const SCHEDULE_TITTLE_PAGE = 'Select schedule'
const CONFIRM_TITTLE_PAGE = 'Confirm turn'

export type StepKey = {
    1: string
    2: string
    3: string
};

export const STEPS = {
    1: {
        id: 1,
        title: SERVICE_TITTLE_PAGE
    },
    2: {
        id: 2,
        title: SCHEDULE_TITTLE_PAGE
    },
    3: {
        id: 3,
        title: CONFIRM_TITTLE_PAGE
    },
}

export const ReserveContext = createContext<TypeReserve>({
    step: STEPS[1],
    setStep: () => { },
    service: null,
    setService: () => { },
    schedule: null,
    setSchedule: () => { },
})

export const ReserveProvider = ({ children }: { children: ReactNode }) => {
    const localStep = JSON.parse(localStorage.getItem('step') as '')
    const [step, setStep] = useState(localStep || STEPS[1])
    const [service, setService] = useState<Service | null>(null)
    const [schedule, setSchedule] = useState<Schedule | null>(null)

    return (
        <ReserveContext.Provider
            value={{
                step, setStep,
                service, setService,
                schedule, setSchedule
            }}
        >
            <Container>
                <Title txt={step.title} />
                <ProgressBar step={step.id} />
                {children}
            </Container>
        </ReserveContext.Provider>
    )
}