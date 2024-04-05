import React, { useEffect, useState } from 'react'
import { Container } from '@components/container/Container'
import { ProgressBar } from '@components/progress-bar/ProgressBar'
import { Title } from '@components/title/Title'
import { Content } from '@components/content/Content'
import { Section, useGetServices } from './hooks/useGetServices'
import { Tap } from './components/tap/Tap'
import { Paginator } from '@components/paginator/Paginator'

const SERVICE_TITTLE_PAGE = 'Select service'
const SERVICE_TITLE_CONTENT = 'Categories'

export const Reserve = () => {
    const getServices = useGetServices()
    const [servicesData, setServicesData] = useState<Section[]>([])

    useEffect(() => {
        getServices()
            .then(res => setServicesData(res))
            .catch(e => console.log(e)) //eslint-disable-line no-console
    }, [])

    return (
        <Container>
            <Title txt={SERVICE_TITTLE_PAGE} />
            <ProgressBar step={1} />
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
            <Paginator />
        </Container>
    )
}