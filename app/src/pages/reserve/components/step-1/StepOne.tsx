import React, { useContext, useEffect, useState } from 'react'
import { Section, useGetServices } from '@pages/reserve/hooks/useGetServices'
import { Content } from '@components/content/Content'
import { Tap } from '../tap/Tap'
import { ReserveContext } from '@pages/reserve/context/ReserveProvider'
import { Paginator } from '@components/paginator/Paginator'
import { Button } from '@components/button/Button'
import { useGoToStep } from '@pages/reserve/hooks/useGoToStep'

const SERVICE_TITLE_CONTENT = 'Categories'

export const StepOne = () => {
    const { step, service } = useContext(ReserveContext)
    if (step && step.id !== 1) return null

    const getServices = useGetServices()
    const goToStep = useGoToStep()
    const [servicesData, setServicesData] = useState<Section[]>([])

    useEffect(() => {
        getServices()
            .then(res => setServicesData(res))
            .catch(e => console.log(e)) //eslint-disable-line no-console
    }, [])

    return (
        <>
            <Content title={SERVICE_TITLE_CONTENT}>
                {servicesData.map((section: Section) => {
                    return (
                        <Tap
                            key={section.title}
                            title={section.title}
                            data={section.data}
                        />
                    )
                })}
            </Content>
            {service &&
                <Paginator>
                    <div></div>
                    <Button
                        label="Next"
                        onClick={() => goToStep(2)}
                        active />
                </Paginator>
            }
        </>
    )
}