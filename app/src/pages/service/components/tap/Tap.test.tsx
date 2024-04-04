import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Item } from '@pages/service/hooks/useGetServices'
import { Tap } from './Tap'
import { TAP_CONTAINER_ID, TAP_CONTENT_SELECT_BUTTON } from '../tap-content/TapContent'

const TITLE = 'TEST title'
const EMPTY_DATA: Item[] = []
const DATA: Item[] = [{
    id: 0,
    name: 'Item name',
    description: 'Item description'
}]

describe('Tap', () => {
    it('Render tap with empty data', () => {
        render(<Tap title={TITLE} data={EMPTY_DATA} />)
        screen.getByText(TITLE)
    })
    it('Render tap with empty data', () => {
        render(<Tap title={TITLE} data={DATA} />)
        screen.getByText(TITLE)
    })
    it('Not render TapContent component before click on more', () => {
        const { queryByTestId } = render(<Tap title={TITLE} data={EMPTY_DATA} />)
        const tapContainer = queryByTestId(TAP_CONTAINER_ID)
        expect(tapContainer).toBeNull()
    })
    it('Render TapContent component', () => {
        const { getByText, getByRole } = render(<Tap title={TITLE} data={DATA} />)
        const buttonMore = getByRole('button')
        expect(buttonMore).toBeDefined()
        fireEvent.click(buttonMore)
        const card = getByText(TAP_CONTENT_SELECT_BUTTON)
        expect(card).toBeDefined()
    })
    it('Dont render TapContent component if data is empty', () => {
        const { queryByTestId, getByRole } = render(<Tap title={TITLE} data={EMPTY_DATA} />)
        const buttonMore = getByRole('button')
        expect(buttonMore).toBeDefined()
        fireEvent.click(buttonMore)
        const tapContainer = queryByTestId(TAP_CONTAINER_ID)
        expect(tapContainer).toBeNull()
    })
})