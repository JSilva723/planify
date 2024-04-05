import React from 'react'
import { StepOne } from './components/step-1/StepOne'
import { StepTwo } from './components/step-2/StepTwo'
import { StepThree } from './components/step-3/StepThree'
import { ReserveProvider } from './context/ReserveProvider'

export const Reserve = () => {

    return (
        <ReserveProvider>
            <StepOne />
            <StepTwo />
            <StepThree />
        </ReserveProvider>
    )
}