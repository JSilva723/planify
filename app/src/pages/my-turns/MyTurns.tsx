import { Container } from '@components/container/Container'
import { Title } from '@components/title/Title'
import React from 'react'

const MY_TURNS_TITTLE_PAGE = 'My turns'

export const MyTurns = () => {

    return (
        <Container>
            <Title txt={MY_TURNS_TITTLE_PAGE} />
        </Container>
    )
}