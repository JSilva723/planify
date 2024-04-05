import { useContext } from 'react'
import { ReserveContext, STEPS, StepKey } from '../context/ReserveProvider'

export const useGoToStep = () => {
    const { setStep } = useContext(ReserveContext)

    function goToStep<T extends keyof StepKey>(step: T) {
        localStorage.setItem('step', JSON.stringify(STEPS[step]))
        setStep(STEPS[step])
    }

    return goToStep
} 