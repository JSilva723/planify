import React, { createContext, useState, Dispatch, SetStateAction } from 'react'
import { TapItem } from '../tap-item/TapItem'
import { TapContent } from '../tap-content/TapContent'
import { Item } from '../../hooks/useGetServices'

interface AccordionProps {
    title: string
    data: Item[]
}

type TypeAccordion = {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    title: string
}

export const AccordionContext = createContext<TypeAccordion>({
    show: false,
    setShow: () => { },
    title: ''
})

export const Tap = ({ title, data }: AccordionProps) => {
    const localTap = JSON.parse(localStorage.getItem('tap') as '')
    const [show, setShow] = useState(title === localTap)

    return (
        <AccordionContext.Provider value={{ show, setShow, title }}>
            <TapItem />
            <TapContent data={data} />
        </AccordionContext.Provider>
    )
}